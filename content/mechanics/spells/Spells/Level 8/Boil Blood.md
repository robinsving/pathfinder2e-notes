---
name: Boil Blood
alias: Boil Blood
tags:
  - pf2e/spell
  - pf2e/spell/level_8
  - pf2e/school/evocation
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/primal
level: 8
school: evocation
type: save
traditions: [arcane, primal]
spelllist: elemental
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 60 feet
target: 1 creature
source: "Pathfinder Secrets of Magic"
save: fortitude
basic: false
traits:
  - common
  - fire
  - evocation
components:
  - somatic
  - verbal
---
# `=this.name`
==fire== | ==evocation==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Spell List** `=this.spelllist`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`  
***
You heat a foe's blood and boil it within its veins. The target takes 10d10 fire damage, with a Fortitude save. A nonliving creature with blood in its body (such as a vampire) can be affected, but a creature with no blood is immune.  
**Critical Success** The target is unaffected.  
**Success** The target takes half damage.  
**Failure** The target takes full damage and is [[Drained]] 2.  
**Critical Failure** The target takes double damage and is [[Drained]] 3.  


**Heightened (+1)** The damage increases by 1d10.  
