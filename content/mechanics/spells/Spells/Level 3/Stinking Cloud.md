---
name: Stinking Cloud
alias: Stinking Cloud
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/conjuration
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/primal
level: 3
school: conjuration
type: save
traditions: [arcane, primal]
deities: Gogunta
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 120 feet
area: 20-foot burst
source: "Pathfinder Core Rulebook"
duration: 1 minute
save: fortitude
basic: false
traits:
  - common
  - poison
  - conjuration
components:
  - somatic
  - verbal
---
# `=this.name`
==poison== | ==conjuration==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Deities** `=this.deities`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Area** `=this.area`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You create a cloud of putrid mist in the area. The cloud functions as [[Obscuring Mist]] except it sickens creatures that end their turns within the cloud. (The [[Concealed]] condition is not a poison effect.)  
**Critical Success** The creature is unaffected.  
**Success** The creature is [[Sickened]] 1.  
**Failure** The creature is [[Sickened]] 1 and [[Slowed]] 1 while in the cloud.  
**Critical Failure** The creature is [[Sickened]] 2 and [[Slowed]] 1 until it leaves the cloud.  
