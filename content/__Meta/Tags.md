
```dataviewjs
let selectedTags = ["archery", "code", "----", "filosofia", "finanzas", "hobbies", "libro", "nlp", "psicologia", "personal", "podcast", "video", "journal"];
let tags = {} // Will hold the count of each Obsidian tag

let pages = dv.pages()
  // Loop and count each of the Obsidian tags
  .tags.forEach(tag => {
	// Add a condition to filter tags (include only the specified tags)
	//if (selectedTags.includes(tag)) {
	  if (tag in tags) {
		tags[tag] = tags[tag] + 1;
	  } else {
		tags[tag] = 1;
	  }
	//}
  })

let graphText = ""; // declare variable for use in the pie chart graph later

// Now tags holds each Obsidian tag with the count of notes it appeared in,
// so let's loop on that and produce the data for the pie chart
for (const [tag, count] of Object.entries(tags)) {
  graphText += `  "${tag}" : ${count}\n`;
}

// mermaid pie chart graph output with improved legend
dv.paragraph(`
~~~mermaid
pie title Obsidian Tags
${graphText}
~~~
`)
```
