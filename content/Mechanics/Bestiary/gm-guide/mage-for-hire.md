---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Mage For Hire"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
level: 3
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "GMG"
name: "Mage For Hire"
level: "Creature 3"
alignment: "N"
size: "Medium"
trait_03: "Human"
trait_04: "Humanoid"
modifier: 7
perception:
  - name: "Perception"
    desc: "Perception +7;"
languages: "Common; "
skills:
  - name: "Skills"
    desc: "__Arcana__: +11 (1d20+11); __Society__: +9 (1d20+9); __Stealth__: +7 (1d20+7); __Thievery__: +9 (1d20+9); "
abilityMods: [0, 2, 1, 4, 1, 1]

abilities_bot:
  - name: "Wizard School Spell"
    desc: "  1 Focus Point, DC 20; 2nd diviner's sight (Core Rulebook 406)"
abilities_top:
  - name: Items
    desc: "invisibility potion, spellbook, staff, thieves' tools;"

speed: 25 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +8 (1d20+8); __Ref__: +9 (1d20+9); __Will__: +10 (1d20+10);"
hp: 31
health:
  - name: HP
    desc: "31; "
attacks:
  - name: Melee
    desc: "⬻ staff +7 ([[two-hand|two-hand d8]]); __Damage__ 1d4 (1d4) bludgeoning"

spellcasting:
  - name: "Arcane Prepared Spells"
    desc: "DC 20, attack +12; __Cantrips (2nd)__ [[Light]], [[daze]], [[detect magic]], [[electric arc]], [[Telekinetic Hand]], [[message]], [[shield]]; __1st__ [[grease]], [[Mystic Armor]], [[Force Barrage]], [[Sure Strike]]; __2nd__ [[Floating Flame]], [[knock]], [[See the Unseen]];"
sourcebook: "_Gamemastery Guide_, page 226."
```

```encounter-table
name: Mage For Hire
creatures:
  - 1: Mage For Hire
```
