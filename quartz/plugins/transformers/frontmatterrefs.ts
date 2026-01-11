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

// Convert Markdown hard-break syntax (two spaces + newline) into <br>
function preprocessHardBreaks(str: string): string {
  return str.replace(/ {2,}\r?\n/g, "<br>\n")
}

// Parse a string as inline Markdown
function parseInlineMarkdown(str: string) {
  const preprocessed = preprocessHardBreaks(str)
  const tree = unified().use(remarkParse).parse(preprocessed) as Parent

  // Inline context: unwrap a single paragraph
  if (tree.children.length === 1 && tree.children[0].type === "paragraph") {
    return (tree.children[0] as Parent).children
  }

  return tree.children
}

// Extract leading and trailing whitespace from a text node
function splitWhitespace(value: string) {
  const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/)
  return {
    leading: match?.[1] ?? "",
    core: match?.[2] ?? value,
    trailing: match?.[3] ?? "",
  }
}

// Reattach whitespace around parsed nodes
function reattachWhitespace(
  nodes: any[],
  leading: string,
  trailing: string,
) {
  const result = [...nodes]

  if (leading) {
    result.unshift({ type: "text", value: leading })
  }

  if (trailing) {
    result.push({ type: "text", value: trailing })
  }

  return result
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
              if (!parent || index == null) return
              if (typeof node.value !== "string") return

              const resolved = resolve(node.value, frontmatter)
              if (resolved === node.value) return

              const { leading, core, trailing } = splitWhitespace(node.value)
              const parsed = parseInlineMarkdown(core)
              const newNodes = reattachWhitespace(parsed, leading, trailing)

              parent.children.splice(index, 1, ...newNodes)
            })

            // Replace inline code (`=this.prop`) and unwrap it
            visit(tree, "inlineCode", (node, index, parent) => {
              if (!parent || index == null) return
              if (typeof node.value !== "string") return

              const match = node.value.match(
                new RegExp(`^${opts.prefix.replace(".", "\\.")}(\\w+)$`),
              )
              if (!match) return

              const key = match[1]
              const value = frontmatter[key as keyof typeof frontmatter]
              if (value == null) return

              const parsed = parseInlineMarkdown(String(value))
              parent.children.splice(index, 1, ...parsed)
            })
          }
        },
      ]
    },
  }
}
