---
name: Illusory Creature

alias: Illusory Creature
tags:
  - pf2e/spell
  - pf2e/spell/level_2
  - pf2e/school/illusion
  - pf2e/spelltype/utility
  - pf2e/tradition/arcane
  - pf2e/tradition/occult
level: 2
school: illusion
type: utility
traditions: [arcane, occult]
time: 2 actions
pf2etime: "*⬺{ .Pathfinder }*"
range: 500 feet
source: "Pathfinder Core Rulebook"
duration: sustained
traits:
  - common
  - auditory
  - olfactory
  - visual
  - illusion
components:
  - somatic
  - verbal
description: >
  You create an illusory image of a Large or smaller creature. It generates the appropriate sounds, smells, and feels believable to the touch. If you and the image are ever farther than 500 feet apart, the spell ends.
  The image can't speak, but you can use your actions to speak through the creature, with the spell disguising your voice as appropriate. You might need to attempt a Deception or Performance check to mimic the creature, as determined by the GM. This is especially likely if you're trying to imitate a specific person and engage with someone that person knows.
  In combat, the illusion can use 2 actions per turn, which it uses when you Sustain the Spell. It uses your spell attack roll for attack rolls and your spell DC for its AC. Its saving throw modifiers are equal to your spell DC - 10. It is substantial enough that it can flank other creatures. If the image is hit by an attack or fails a save, the spell ends.
  The illusion can cause damage by making the target believe the illusion's attacks are real, but it cannot otherwise directly affect the physical world. If the illusory creature hits with a Strike, the target takes mental damage equal to 1d4 plus your spellcasting ability modifier. This is a mental effect. The illusion's Strikes are nonlethal. If the damage doesn't correspond to the image of the monster-for example, if an illusory Large dragon deals only 5 damage-the GM might allow the target to attempt an immediate Perception check to disbelieve the spell. Any relevant resistances and weaknesses apply if the target thinks they do, as judged by the GM. For example, if the illusion wields a warhammer and attacks a creature resistant to bludgeoning damage, the creature would take less mental damage. However, illusory damage does not deactivate regeneration or trigger other effects that require a certain damage type. The GM should track illusory damage dealt by the illusion.
  Any creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion. When a creature disbelieves the illusion, it recovers from half the damage it had taken from it (if any) and doesn't take any further damage from it.

  &NewLine;**Heightened (+1)** The damage of the image's Strikes increases by 1d4, and the maximum size of creature you can create increases by one (to a maximum of Gargantuan).
---
# `=this.name`
==auditory== | ==olfactory== | ==visual== | ==illusion==

*Source* `=this.source`
**Traditions** `=this.traditions`
**Cast** `=this.time` | `=this.components`
**Range** `=this.range`
**Duration** `=this.duration`

***
`=this.description`