---
name: Planar Tether
aliases:
  - Dimensional Anchor
tags:
  - pf2e/spell
  - pf2e/spell/level_4
  - pf2e/school/abjuration
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 4
school: abjuration
type: save
traditions:
  - arcane
  - divine
  - occult
bloodline: psychopomp
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 30 feet
target: 1 creature
source: Pathfinder Core Rulebook
duration: varies
save: will
basic: false
traits:
  - common
  - abjuration
components:
  - somatic
  - verbal
---
# `=this.name`
==abjuration==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Bloodline** `=this.bloodline`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You interfere with the target's ability to teleport and travel between dimensions. Dimensional anchor attempts to counteract any teleportation effect, or any effect that would move the target to a different plane. The duration is determined by the target's Will save. 

**Critical Success** The target is unaffected.  
**Success** The effect's duration is 1 minute.  
**Failure** The effect's duration is 10 minutes.  
**Critical Failure** The effect's duration is 1 hour.