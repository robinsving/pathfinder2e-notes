---
name: Shadow Projectile
alias: Shadow Projectile
tags:
  - pf2e/spell
  - pf2e/spell/level_3
  - pf2e/school/illusion
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
level: 3
school: illusion
type: save
traditions: [arcane, occult]
time: reaction
pf2etime: "*⬲{ .Pathfinder }*"
trigger: An ally within 20 feet of you makes a ranged attack roll
source: "Pathfinder Secrets of Magic"
save: will
basic: false
traits:
  - common
  - shadow
  - visual
  - illusion
components:
  - somatic
---
# `=this.name`
==shadow== | ==visual== | ==illusion==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`; **Trigger** `=this.trigger`  
**Saving Throw** `=this.save`  
***
You create an illusory duplicate of your ally's ranged attack to confuse your opponents. You launch an illusory double of your ally's projectile or spell at the same target, leaving the enemy unsure which attack to avoid. The target takes 3d8 mental damage, depending on its Will save. Regardless of the result of its save, it's temporarily immune to shadow projectile spells for 1 hour.  
**Critical Success** The creature is unaffected.  
**Success** The creature is [[Flat-Footed]] against the triggering attack.  
**Failure** The creature is flat-footed against the triggering attack and takes full damage from your illusory projectile.  
**Critical Failure** As failure, but double damage.  


**Heightened (+2)** The damage increases by 1d8.  
