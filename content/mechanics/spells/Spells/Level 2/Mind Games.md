---
name: Mind Games
alias: Mind Games
tags:
  - pf2e/spell
  - pf2e/spell/level_2
  - pf2e/school/enchantment
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
level: 2
school: enchantment
type: save
traditions: [arcane, occult]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 30 feet
target: 1 creature
source: "Pathfinder #169: Kindled Magic"
duration: sustained up to 1 minute
save: will
basic: false
cost: 3 gp game piece focus
traits:
  - uncommon
  - mental
  - enchantment
components:
  - somatic
  - verbal
---
# `=this.name`
==uncommon== | ==mental== | ==enchantment==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
**Cost** `=this.cost`  
***
You lock minds with the target, trying to mentally subdue them. The target must attempt a Will save. Each time you Sustain this Spell, the target attempts another Will save.  
**Critical Success** You are [[Stunned]] 1 and the spell ends.  
**Success** The target is unaffected.  
**Failure** The target is stunned 1.  
**Critical Failure** The target is [[Stunned]] 2.  
