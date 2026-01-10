---
name: Vampiric Touch
alias: Vampiric Touch
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/necromancy
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 3
school: necromancy
type: save
traditions: [arcane, divine, occult]
bloodline: aberrant
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: touch
target: 1 living creature
source: "Pathfinder Core Rulebook"
save: fortitude
basic: true
traits:
  - common
  - death
  - negative
  - necromancy
components:
  - somatic
  - verbal
---
# `=this.name`
==death== | ==negative== | ==necromancy==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Bloodline** `=this.bloodline`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Basic Saving Throw** `=this.save`  
***
Your touch leeches the lifeblood out of a target to empower yourself. You deal 6d6 negative damage to the target. You gain temporary Hit Points equal to half the negative damage the target takes (after applying resistances and the like). You lose any remaining temporary Hit Points after 1 minute.  
**Heightened (+1)** The damage increases by 2d6.  
