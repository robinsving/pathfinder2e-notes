---
name: Gravity Well
alias: Gravity Well
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/evocation
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
level: 3
school: evocation
type: save
traditions: [arcane, occult]
deities: Otolmens, The Path of the Heavens
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 120 feet
area: 30-foot burst
source: "Pathfinder Lost Omens: Gods & Magic"
save: reflex
basic: false
traits:
  - common
  - evocation
components:
  - somatic
  - verbal
---
# `=this.name`
==evocation==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Deities** `=this.deities`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Area** `=this.area`  
**Saving Throw** `=this.save`  
***
You create a sphere of altered gravity. All creatures and unsecured objects in the area move towards the center, depending on their Reflex saving throws. This follows the rules for forced movement. If there's not enough space near the center of the sphere, creatures and objects nearer to the center move first, and others move as far as they can without being blocked, up to the amount set by their saving throw outcomes.  
**Critical Success** The creature is unaffected.  
**Success** The creature moves 5 feet toward the center.  
**Failure** The creature moves 15 feet toward the center.  
**Critical Failure** The creature moves 30 feet toward the center.  
