---
name: Slow
alias: Slow
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/transmutation
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
  - pf2e/tradition/primal
level: 3
school: transmutation
type: save
traditions: [arcane, occult, primal]
deities: Korada, Lorthact, Matravash
bloodline: demonic
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 30 feet
target: 1 creature
source: "Pathfinder Core Rulebook"
duration: 1 minute
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
**Bloodline** `=this.bloodline`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You dilate the flow of time around the target, slowing its actions.  
**Critical Success** The target is unaffected.  
**Success** The target is [[Slowed]] 1 for 1 round.  
**Failure** The target is [[Slowed]] 1 for 1 minute.  
**Critical Failure** The target is [[Slowed]] 2 for 1 minute.  

**Heightened (6th)** You can target up to 10 creatures.  
