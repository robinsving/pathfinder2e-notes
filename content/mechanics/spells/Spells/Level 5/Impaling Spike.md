---
name: Impaling Spike
alias: Impaling Spike
tags:
  - pf2e/spell
  - pf2e/spell/level_5
  - pf2e/school/conjuration
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/primal
level: 5
school: conjuration
type: save
traditions: [arcane, primal]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 30 feet
target: 1 creature
source: "Pathfinder Advanced Player's Guide"
duration: 1 minute
save: reflex
basic: false
traits:
  - common
  - conjuration
components:
  - somatic
  - verbal
---
# `=this.name`
==conjuration==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You conjure a spike that thrusts up from the earth beneath a target creature, potentially impaling it. The spike is made of cold iron and deals 8d6 piercing damage. The target must attempt a Reflex save.  
**Critical Success** The target dodges the spike and is unaffected.  
**Success** The target is struck by the spike and takes half damage.  
**Failure** The target is impaled through a leg or another non - vital body part. The creature takes full damage and, if it's standing on solid ground, becomes [[Immobilized]]. It can attempt to Escape(the DC is your spell DC). While it remains impaled, it takes damage from any weakness to cold iron it has at the end of each of its turns.  
**Critical Failure** As failure, but the creature is impaled through a vital organ or its center of mass, taking double damage, and it is [[Flat-Footed]] as long as it's impaled.  


**Heightened (+1)** The damage increases by 2d6 piercing.  
