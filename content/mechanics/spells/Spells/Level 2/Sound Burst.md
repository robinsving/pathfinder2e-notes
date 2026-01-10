---
name: Sound Burst
alias: Sound Burst
tags:
  - pf2e/spell
  - pf2e/spell/level_2
  - pf2e/school/evocation
  - pf2e/spelltype/save
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 2
school: evocation
type: save
traditions: [divine, occult]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 30 feet
area: 10-foot burst
source: "Pathfinder Core Rulebook"
save: fortitude
basic: false
traits:
  - common
  - sonic
  - evocation
components:
  - somatic
  - verbal
---
# `=this.name`
==sonic== | ==evocation==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Area** `=this.area`  
**Saving Throw** `=this.save`  
***
A cacophonous noise blasts out, dealing 2d10 sonic damage. Each creature must attempt a Fortitude save.  
**Critical Success** The creature is unaffected.  
**Success** The creature takes half damage.  
**Failure** The creature takes full damage and is [[Deafened]] for 1 round.  
**Critical Failure** The creature takes double damage, is Deafened for 1 minute, and is [[Stunned]] 1.  


**Heightened (+1)** The damage increases by 1d10.  
