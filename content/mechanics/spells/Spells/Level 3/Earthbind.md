---
name: Earthbind
alias: Earthbind
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/transmutation
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/primal
level: 3
school: transmutation
type: save
traditions: [arcane, primal]
deities: Doloras, Torag
spelllist: elemental
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 120 feet
target: 1 flying creature
source: "Pathfinder Core Rulebook"
duration: varies
save: fortitude
basic: false
traits:
  - common
  - transmutation
components:
  - somatic
  - verbal
---
# `=this.name`
==transmutation==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Deities** `=this.deities`  
**Spell List** `=this.spelllist`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
Using the weight of earth, you hamper a target's flight, with effects based on its Fortitude save. If the creature reaches the ground safely, it doesn't take falling damage.**Critical Success** The target is unaffected.  
**Success** The target falls safely up to 120 feet.  
**Failure** The target falls safely up to 120 feet. If it hits the ground, it can't Fly, levitate, or otherwise leave the ground for 1 round.  
**Critical Failure** The target falls safely up to 120 feet. If it hits the ground, it can't Fly, levitate, or otherwise leave the ground for 1 minute.  
