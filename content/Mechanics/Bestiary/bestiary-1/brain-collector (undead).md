---
obsidianUIMode: preview
noteType: pf2eMonster
aliases:
  - Brain Collector (undead)
  - Undead Brain Collector
tags:
  - pf2e/creature/type/aberration
  - pf2e/creature/level/7
  - pf2e/creature/type/undead
statblock: inline
name: Undead Brain Collector
level: 8
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B1"
name: "Undead Brain Collector"
level: "Creature 7"
rare_02: "Uncommon"
alignment: "CE"
size: "Large"
trait_01: "Unique"
trait_02: "Undead"
trait_03: "Aberration"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +17; __darkvision__;"
languages: "Abyssal, Aklo, Common, Draconic, Protean, Undercommon; telepathy 100 feet;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +16 (1d20+16); __Athletics__: +17 (1d20+17); __Occultism__: +12 (1d20+12); __Stealth__: +16 (1d20+16);"
abilityMods: [6, 3, 5, -1, 4, 0]

abilities_mid:
  - name: "Absorb Phantom Brain"
    desc: "⬲ (necromancy) **Trigger** The undead brain collector possesses at least 1 phantom brain after using Brainlash; **Effect** The undead brain collector absorbs 1d4 of its phantom brains, gaining 1d8 temporary hit points for each brain it absorbed."
abilities_bot:
  - name: "Brainlash"
    desc: "⬺ (mental, necromancy, occult) The undead brain collector extrudes a writhing tangle of ectoplasm from its bursted brain blisters. These ectoplasmic strands lash out at all living targets within 30 feet. Targets in this area must attempt a DC 25 Will save. After the undead brain collector uses this ability, seven phantom brains glow and shimmer where its brain blisters once were. It can’t use Brainlash again until all seven phantom brains are Absorbed.\n**Critical Success:** The creature is unaffected.\n**Success** The creature takes 4d6 mental damage.\n**Failure** The creature takes 8d6 mental damage.\n**Critical Failure** The creature takes 8d6 mental damage and is confused."
  - name: "Mind-Rotting Toxin"
    desc: "(poison) **Saving Throw** DC 25 Fortitude; **Maximum Duration** 6 rounds;\n **Stage 1** 1d6 negative and [[Stupefied|Stupefied 1]] (1 round);\n **Stage 2** 1d6 negative, [[Stupefied|Stupefied 1]], and [[Slowed|Slowed 1]] (1 round);\n **Stage 3** 2d6 negative, [[Stupefied|Stupified 2]], and [[Slowed|Slowed 1]] (1 round)"

speed: 25 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +18 (1d20+18); __Ref__: +12 (1d20+12); __Will__: +15 (1d20+15);"
hp: 130
health:
  - name: HP
    desc: "130, negative healing;  __Immunities__ death efects, disease, paralysed, poison, unconscious;"
attacks:
  - name: Melee
    desc: "⬻ jaws +18 __Damage__ 2d10+8 (2d10+8) piercing plus mind-rotting toxen"
  - name: Melee
    desc: "⬻ claw +18 ([[agile]]); __Damage__ 2d8+8 (2d8+8) slashing"

sourcebook: "_Bestiary_, page 46."
```

```encounter-table
name: Brain Collector
creatures:
  - 1: Brain Collector
```
