---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Aurumvorax"
tags: 
  - pf2e/creature/type/animal
  - pf2e/creature/level/9
statblock: inline
level: 9
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B2"
name: "Aurumvorax"
level: "Creature 9"
alignment: "N"
size: "Small"
trait_03: "Animal"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18; __darkvision__, __imprecise scent 30__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +20 (1d20+20), (Athletics: +6 (1d20+6) to Swim); __Stealth__: +18 (1d20+18); "
abilityMods: [6, 2, 4, -4, 3, 0]

abilities_mid:
  - name: "Tenacious Stance"
    desc: "  An aurumvorax gains a +4 circumstance bonus to its Fortitude or Reflex DC against [[Shove]] and [[Trip]] attempts, and to its [[compendium/skills.md#Athletics|Athletics]] DC against attempts to escape its Grab."
  - name: "Ferocity"
    desc: "⬲ "
abilities_bot:
  - name: "Bleeding Critical"
    desc: "  When an aurumvorax scores a critical hit, the target takes 1d6 (1d6) [[Persistent Damage|persistent bleed damage]]."
  - name: "Gnaw Metal"
    desc: "⬻  The aurumvorax makes a jaws [[Strike]] against a creature it has [[grabbed]]. If the attack hits, the target is knocked [[prone]] if it is Medium or smaller. In addition, if the target is wearing armor with Hardness 10 or lower, the armor becomes [[broken]]. If this [[Strike]] breaks a creature's armor or damages a creature that is unarmored or wearing [[broken]] armor, the target also takes 1d6 (1d6) [[Persistent Damage|persistent bleed damage]]. This [[Strike]] doesn't further damage armor that's already [[broken]]."
  - name: "Rapid Rake"
    desc: "⬺  The aurumvorax makes four claw [[Strike|Strikes]] against a creature it has [[grabbed]]. Each attack counts toward the aurumvorax's multiple attack penalty, and the multiple attack penalty increases with each attack."

speed: 35 feet, burrow 10 feet

ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__: +19 (1d20+19); __Ref__: +17 (1d20+17); __Will__: +16 (1d20+16);"
hp: 170
health:
  - name: HP
    desc: "170; "
attacks:
  - name: Melee
    desc: "⬻ jaws +21 __Damage__ 2d10+12 (2d10+12) piercing plus Grab"
  - name: Melee
    desc: "⬻ claw +21 ([[agile]]); __Damage__ 2d8+12 (2d8+12) slashing plus Grab"

sourcebook: "_Bestiary 2_, page 29."
```

```encounter-table
name: Aurumvorax
creatures:
  - 1: Aurumvorax
```
