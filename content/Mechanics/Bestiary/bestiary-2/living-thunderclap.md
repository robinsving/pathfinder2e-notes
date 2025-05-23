---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Living Thunderclap"
tags: 
  - pf2e/creature/type/elemental
  - pf2e/creature/level/4
statblock: inline
level: 4
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B2"
name: "Living Thunderclap"
level: "Creature 4"
alignment: "N"
size: "Medium"
trait_03: "Air"
trait_04: "Elemental"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __darkvision__;"
languages: "Sussuran; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +12 (1d20+12); __Stealth__: +12 (1d20+12); "
abilityMods: [3, 4, 2, -3, 1, 0]

abilities_bot:
  - name: "Swiftness"
    desc: "  The living thunderclap doesn't trigger reactions when it moves."
  - name: "Thunderbolt"
    desc: "⬺ ([[electricity]], [[evocation]], [[primal]], [[sonic]]);  The living thunderclap emits a bolt of lightning that crashes with deafening thunder. The living thunderclap makes a lightning bolt [[Strike]] that deals 1d12 (1d12) electricity damage. If it hits, the target and any creatures within a 15-foot emanation around the target take 2d6 (2d6) sonic damage and must attempt a DC 18 basic Fortitude save. Any creature that fails its save is also [[deafened]] for 1d4 (1d4) rounds."

speed: fly 50 feet; swiftness;

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +10 (1d20+10); __Ref__: +12 (1d20+12); __Will__: +9 (1d20+9);"
hp: 50
health:
  - name: HP
    desc: "50; "
attacks:
  - name: Melee
    desc: "⬻ gust +14 ([[agile]], [[finesse]]); __Damage__ 2d6+6 (2d6+6) bludgeoning plus Push 5 feet"
  - name: Ranged
    desc: "⬻ lightning bolt +14 ([[electricity]], [[range|range increment 50 feet]]); __Damage__ 2d12 (2d12) electricity"

sourcebook: "_Bestiary 2_, page 106."
```

```encounter-table
name: Living Thunderclap
creatures:
  - 1: Living Thunderclap
```
