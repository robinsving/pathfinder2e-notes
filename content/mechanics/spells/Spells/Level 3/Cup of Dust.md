---
name: Cup of Dust
alias: Cup of Dust
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/necromancy
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
  - pf2e/tradition/primal
level: 3
school: necromancy
type: save
traditions: [arcane, occult, primal]
deities: Nurgal, Set
spelllist: elemental
time: 3 actions
pf2etime: "*⬽{ .Pathfinder }*"
range: 30 feet
target: 1 living creature
source: "Pathfinder Lost Omens: Gods & Magic"
duration: 1 day
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
**Spell List** `=this.spelllist`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You curse the target with a thirst no drink can quench. You can Dismiss the spell. The target must attempt a Fortitude save.  
**Critical Success** The creature is unaffected and is temporarily immune for 1 hour.  
**Success** The creature is [[Fatigued]] for 1 round.  
**Failure** The creature is immediately afflicted by thirst as if it hadn't had a drink in days. It becomes Fatigued and takes 1d4 damage each hour that can't be healed until it quenches its thirst. No amount of drinking can quench the creature's thirst during the spell's duration.  
**Critical Failure** As failure but the creature takes 2d4 damage each hour, twice as much as usual for thirst.  

**Heightened (+3)** The thirst becomes more unbearable, increasing the damage each hour by 1d4, or by 2d4 on a critical failure.  
