
# Att göra

```dataviewjs
dv.taskList(dv.pages().where(p => p.file.folder.includes("Worlds")).file.tasks.where(t => !t.completed))
```

