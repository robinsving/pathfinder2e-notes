---
aliases:
  - Röd Skymning
  - Röda Armén
---
Partyt som äventyrar heter Röda armén, eller nåt

```dataview
TABLE character
WHERE contains(file.folder, this.file.folder)
AND owner = "Robin"
SORT file.name DESC
```

```dataview
TABLE owner
WHERE file.folder = this.file.folder
AND owner != "Robin"
SORT file.name DESC
```

