---
name: Enervation
alias: Enervation
tags:
  - pf2e/spell
  - pf2e/spell/level_4
  - pf2e/school/necromancy
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 4
school: necromancy
type: save
traditions: [arcane, divine, occult]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
area: 30-foot line
source: "Pathfinder Advanced Player's Guide"
save: fortitude
basic: false
traits:
  - common
  - negative
  - necromancy
components:
  - somatic
  - verbal
---
# `=this.name`
==negative== | ==necromancy==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`  
**Area** `=this.area`  
**Saving Throw** `=this.save`  
***
Extending a finger, you fire a beam of negative energy that weakens the life force of any creature it touches. Each living creature in the line must attempt a Fortitude save.  
**Critical Success** The creature is unaffected.  
**Success** The creature takes 2d8 persistent negative damage.  
**Failure** The creature takes 4d8 persistent negative damage and becomes [[Drained]] 1.  
**Critical Failure** The creature takes 4d8 persistent negative damage and becomes [[Drained]] 2 and [[Doomed]] 1.  

**Heightened (+2)** The persistent negative damage increases by 1d8 persistent negative damage on a success, or by 2d8 persistent negative damage on a failure or critical failure.  
