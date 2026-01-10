---
name: Dull Ambition
alias: Dull Ambition
tags:
  - pf2e/spell
  - pf2e/spell/level_4
  - pf2e/school/enchantment
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 4
school: enchantment
type: save
traditions: [arcane, divine, occult]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 120 feet
target: 1 creature
source: "Pathfinder Advanced Player's Guide"
duration: varies
save: will
basic: false
traits:
  - common
  - curse
  - mental
  - misfortune
  - enchantment
components:
  - somatic
  - verbal
---
# `=this.name`
==curse== | ==mental== | ==misfortune== | ==enchantment==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`; **Duration** `=this.duration`  
***
You curse the target to fail in all avenues of its life that require drive and ambition, as it inadvertently undermines its own goals at every turn. The effect is based on the target's Will save.  
**Critical Success** The target is unaffected.  
**Success** For 1 hour, the target rolls twice and uses the lower result on initiative rolls.  
**Failure** For 1 day, the target rolls twice and uses the lower result on initiative rolls and any check to determine the success of a downtime activity.  
**Critical Failure** As failure, but the duration is unlimited.  
