---
title: Contingency
tags: pf2e/trait
draft: true
---
# Contingency
*Source* Secrets of Magic pg. 252 1.1

Spells with this trait grant you an action during the spell's effects, typically a reaction with a special trigger. They typically have a long duration, such as 24 hours. You can have only one spell with the contingency trait, or one contingency spell, active at a time. If you cast another spell with the contingency trait or contingency, the newer casting supersedes the older.

---

### Spells
```dataview
Table level, traditions FROM #pf2e/spell 
WHERE contains(traits, lower(this.file.name))
SORT level ASC
```