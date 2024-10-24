---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Cave Fisher"
tags: 
  - pf2e/creature/type/animal
  - pf2e/creature/level/2
statblock: inline
level: 2
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B2"
name: "Cave Fisher"
level: "Creature 2"
alignment: "N"
size: "Medium"
trait_03: "Animal"
modifier: 7
perception:
  - name: "Perception"
    desc: "Perception +7; __darkvision__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +10 (1d20+10); __Stealth__: +9 (1d20+9); "
abilityMods: [4, 3, 3, -5, 1, -3]

abilities_bot:
  - name: "Pull Filament"
    desc: "⬻  The cave fisher pulls a creature [[grabbed]] by its filament toward itself, even suspending the target vertically if necessary. The cave fisher attempts an [[compendium/skills.md#Athletics|Athletics]] check against the creature's Fortitude DC. On a success, the cave fisher pulls the creature 15 feet closer to it (30 feet closer on a critical success)."
  - name: "Sticky Filament"
    desc: "  Any creature hit by the cave fisher's sticky filament is [[grabbed]]. The cave fisher can move while it has a creature [[grabbed]] with its filament, but it automatically releases the creature if the cave fisher moves beyond the filament's 60-foot length. The cave fisher can use only one filament at a time, and it can sever the filament and release any creature [[grabbed]] by it as a free action. The filament can be severed by a [[Strike]] that deals at least 10 slashing damage to it. This doesn't deal any damage to the cave fisher itself. The filament has AC 17, and its [[Escape]] DC is 19."

speed: 15 feet, climb 15 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +9 (1d20+9); __Ref__: +9 (1d20+9); __Will__: +7 (1d20+7);"
hp: 30
health:
  - name: HP
    desc: "30; "
attacks:
  - name: Melee
    desc: "⬻ claw +10 __Damage__ 1d10+6 (1d10+6) slashing"
  - name: Ranged
    desc: "⬻ filament +11 ([[range|range 60 feet]]); __Damage__ sticky filament"

sourcebook: "_Bestiary 2_, page 49."
```

```encounter-table
name: Cave Fisher
creatures:
  - 1: Cave Fisher
```
