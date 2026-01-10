import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { QuartzPluginData } from "../vfile"
import { unified } from "unified"
import remarkParse from "remark-parse"
import { Parent } from "unist"

export interface Options {
  prefix: string
}

const defaultOptions: Options = {
  prefix: "=this.",
}

// Parse a string into inline Markdown nodes
function preprocessHardBreaks(str: string): string {
  // Replace two or more spaces followed by newline with <br>
  return str.replace(/ {2,}\r?\n/g, "<br>\n")
}

function parseInlineMarkdown(str: string) {
  const preprocessed = preprocessHardBreaks(str)
  const tree = unified().use(remarkParse).parse(preprocessed) as Parent

  // Inline context: unwrap single paragraph
  if (tree.children.length === 1 && tree.children[0].type === "paragraph") {
    return (tree.children[0] as Parent).children
  }

  return tree.children
}

export const ReplaceDataview: QuartzTransformerPlugin<Partial<Options>> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts }
  const pattern = new RegExp(`${opts.prefix.replace(".", "\\.")}(\\w+)`, "g")

  function resolve(
    value: string,
    frontmatter: QuartzPluginData["frontmatter"],
  ): string {
    return value.replace(pattern, (_, key) => {
      const v = frontmatter[key as keyof typeof frontmatter]
      return v != null ? String(v) : ""
    })
  }

  return {
    name: "ReplaceDataview",

    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            const frontmatter =
              (file.data.frontmatter as QuartzPluginData["frontmatter"]) ?? {}

            // Replace in normal text nodes
            visit(tree, "text", (node, index, parent) => {
              if (!parent || index === undefined || typeof node.value !== "string")
                return

              const resolved = resolve(node.value, frontmatter)
              const newNodes = parseInlineMarkdown(resolved)
              parent.children.splice(index, 1, ...newNodes)
            })

            // Replace inline code (`=this.xxx`) and unwrap it
            visit(tree, "inlineCode", (node, index, parent) => {
              if (!parent || index === undefined || typeof node.value !== "string")
                return

              const match = node.value.match(
                new RegExp(`^${opts.prefix.replace(".", "\\.")}(\\w+)$`)
              )
              if (!match) return

              const key = match[1]
              const value = frontmatter[key as keyof typeof frontmatter]
              if (value == null) return

              const newNodes = parseInlineMarkdown(String(value))
              parent.children.splice(index, 1, ...newNodes)
            })
          }
        },
      ]
    },
  }
}
