---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Necromancer"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/5
statblock: inline
level: 5
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "GMG"
name: "Necromancer"
level: "Creature 5"
alignment: "NE"
size: "Medium"
trait_03: "Human"
trait_04: "Humanoid"
modifier: 10
perception:
  - name: "Perception"
    desc: "Perception +10;"
languages: "Common; "
skills:
  - name: "Skills"
    desc: "__Arcana__: +13 (1d20+13); __Crafting__: +11 (1d20+11); __Intimidation__: +8 (1d20+8); __Religion__: +10 (1d20+10); "
abilityMods: [2, 3, 2, 4, 3, -1]

abilities_top:
  - name: "Stench of Decay"
    desc: " ([[arcane]], [[aura]], [[conjuration]], [[poison]]);  The necromancer emits a scent of putrid rot in a 5-foot emanation. A creature that enters or begins its turn in the aura is [[sickened|sickened 1]]."
  - name: Items
    desc: "light mace, hooded robe, scroll of spectral hand, spellbook (Abominable Missives of the Atrophied);"
abilities_bot:
  - name: "Drain Bonded Item"
    desc: "⭓ ([[arcane]]); __Requirements__ The necromancer hasn't acted yet on this turn __Frequency__ once per day  __Effect__  The necromancer expends the power stored in their mace. This gives them the ability to cast one prepared spell they prepared today and already cast, without spending a spell slot."

speed: 25 feet

ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__: +9 (1d20+9); __Ref__: +12 (1d20+12); __Will__: +12 (1d20+12);"
hp: 58
health:
  - name: HP
    desc: "58; "
attacks:
  - name: Melee
    desc: "⬻ light mace +12 ([[agile]], [[finesse]], [[shove]]); __Damage__ 1d4+4 (1d4+4) bludgeoning"

spellcasting:
  - name: "Wizard Prepared Spells"
    desc: "DC 21, attack +13; __Cantrips (3rd)__ [[Void Warp]], [[detect magic]], [[electric arc]], [[ray of frost]], [[read aura]], [[shield]]; __1st__ [[fear]], [[Gentle Landing]], [[ray of enfeeblement]], [[spider sting]]; __2nd__ [[False Vitality]], [[grim tendrils]], [[mirror image]], [[web]]; __3rd__ [[bind undead]], [[lightning bolt]], [[Vampiric Feast]];"
sourcebook: "_Gamemastery Guide_, page 231."
```

```encounter-table
name: Necromancer
creatures:
  - 1: Necromancer
```
