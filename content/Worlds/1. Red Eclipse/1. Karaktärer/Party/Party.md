---
aliases:
  - Röd Skymning
  - Röda Armén
---
Partyt som äventyrar heter [[Red Eclipse|Röda armén]], eller nåt

```dataview
TABLE character
WHERE contains(file.folder, this.file.folder)
AND owner = "Robin"
SORT file.name DESC
```

```dataview
TABLE owner, class
WHERE contains(file.folder, this.file.folder)
AND file.name != this.file.name
AND status = "alive"
AND character = "pc"
SORT file.name DESC
```


# RIP
```dataview
TABLE owner, character, class
WHERE file.folder = this.file.folder
AND file.name != this.file.name
AND status != "alive"
SORT file.name DESC
```

