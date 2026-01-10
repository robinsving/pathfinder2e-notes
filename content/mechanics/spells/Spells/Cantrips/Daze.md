---
name: Daze
alias: Daze
tags:
  - pf2e/spell
  - pf2e/spell/cantrip_1
  - pf2e/school/enchantment
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 1
school: enchantment
type: save
traditions: [arcane, divine, occult]
bloodline: aberrant, hag
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 60 feet
target: 1 creature
source: "Pathfinder Core Rulebook"
duration: 1 round
save: will
basic: true
traits:
  - common
  - cantrip
  - mental
  - nonlethal
  - enchantment
components:
  - somatic
  - verbal
---
# `=this.name`
==cantrip== | ==mental== | ==nonlethal== | ==enchantment==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Bloodline** `=this.bloodline`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Basic Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You cloud the target's mind and daze it with a mental jolt. The jolt deals mental damage equal to your spellcasting ability modifier; the target must attempt a basic Will save. If the target critically fails the save, it is also [[Stunned]] 1.  
**Heightened (+2)** The damage increases by 1d6.  
