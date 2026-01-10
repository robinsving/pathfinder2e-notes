---
name: Steal Voice
alias: Steal Voice
tags:
  - pf2e/spell
  - pf2e/spell/level_4
  - pf2e/school/necromancy
  - pf2e/spelltype/save
  - pf2e/tradition/arcane
  - pf2e/tradition/divine
  - pf2e/tradition/occult
level: 4
school: necromancy
type: save
traditions: [arcane, divine, occult]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 30 feet
target: 1 creature
source: "Pathfinder #186: Ghost King's Rage"
save: fortitude
basic: false
traits:
  - uncommon
  - curse
  - incapacitation
  - necromancy
components:
  - somatic
  - verbal
---
# `=this.name`
==uncommon== | ==curse== | ==incapacitation== | ==necromancy==

*Source* `=this.source`  
**Traditions** `=this.traditions`  
**Cast** `=this.time` | `=this.components`  
**Range** `=this.range`; **Targets** `=this.target`  
**Saving Throw** `=this.save`  
***
You steal a creature's voice, rendering them mute. The effect is determined by the target's Fortitude save. The target then becomes temporarily immune for 1 minute. A creature that has no voice or can't speak is immune to this spell.  
**Critical Success** The target is unaffected.  
**Success** The target becomes voiceless until the end of its next turn. A voiceless creature can't speak, create vocal sounds, or take auditory actions (including supplying verbal or command components). As long as the target is voiceless, whenever you speak, you can choose to have your voice sound like either your voice or the target's voice.  
**Failure** As success, but the duration is 1 minute.  
**Critical Failure** As success, but the duration is permanent.  
