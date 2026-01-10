---
name: Feast of Ashes
alias: Feast of Ashes
tags:
  - pf2e/spell
  - pf2e/spell/level_2
  - pf2e/school/necromancy
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
  - pf2e/tradition/primal
level: 2
school: necromancy
type: save
traditions: [arcane, occult, primal]
deities: Fumeiyoshi, Trelmarixian
time: 3 actions
pf2etime: "*⬽{ .Pathfinder }*"
range: 30 feet
target: 1 living creature
source: "Pathfinder Lost Omens: Gods & Magic"
duration: 1 week
save: fortitude
basic: false
traits:
  - common
  - curse
  - necromancy
components:
  - material
  - somatic
  - verbal
---
# `=this.name`
==curse== | ==necromancy==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Deities** `=this.deities`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You curse the target with a hunger no food can sate. You can Dismiss the spell. The target must attempt a Fortitude save.  
**Critical Success** The creature is unaffected and is temporarily immune for 1 hour.  
**Success** The creature is [[Fatigued]] for 1 round.  
**Failure** The creature is immediately afflicted by hunger as if it hadn't eaten food in days. It becomes Fatigued and takes 1d4 damage each day that can't be healed until it sates its hunger. No amount of eating can sate the creature's hunger during the spell's duration. After the spell's duration, the creature takes damage from starvation.  
**Critical Failure** As failure but the creature takes 2d4 damage each day, twice as much as usual for hunger.  


**Heightened (+1)** The hunger becomes more unbearable, increasing the damage each day by 1d4, or by 2d4 on a critical failure.  
