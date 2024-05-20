
> [!multi-column]
># Quick reach links
>[[Basic Actions|Basic Actions]]
>[[Worlds/1. Red Eclipse/Quick notes|Quick notes]]
>[[Calculate DCs]]
>[[Inner Sea Region Map]]
>
> # Quests
> ```dataview
LIST FROM #quest
WHERE !contains(tags, "completed")
>```

---

> [!multi-column]
> # Nya filer
> ```dataview
TABLE WITHOUT ID file.link AS "Recently Created", dateformat(file.ctime, "DD") AS Added 
 FROM -#Ignore 
SORT file.ctime desc LIMIT 7
>```
>
># Recently edited files
>```dataview
TABLE WITHOUT ID file.link AS "Recently Edited", dateformat(file.mtime, "ff") AS Modified 
FROM -#Ignore 
SORT file.mtime desc LIMIT 7
>```

---

# Tasks
> [!multi-column]
> ```dataviewjs
> dv.taskList(dv.pages().where(p => p.file.folder.includes("Worlds")).file.tasks.where(t => !t.completed))
> ;
