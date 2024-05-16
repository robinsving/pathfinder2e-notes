---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: 
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/level/1
statblock: inline
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Malevolence"
name: "Esobok Ghoul"
level: "Creature 5"
alignment: "CE"
size: "Medium"
trait_01: "Rare"
trait_02: "Ghoul"
trait_03: "Undead"
trait_04: "Variant"
modifier: 14
perception:
  - name: "Perception"
    desc: "Perception +14; __darkvision__; __lifesense__ 60 feet; scent (imprecise) 60 feet."
languages: "Abyssal, Celestial, Infernal, Requian"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +13 (1d20+13); __Athletics__: +12 (1d20+12); __Religion__: +6 (1d20+6); __Stealth__: +13 (1d20+13); __Survival__: +12 (1d20+12); "
abilityMods: [3, 4, 4, -3, 3, 2]

abilities_bot:
  - name: "Consume Flesh"
    desc: "⬻ ([[manipulate]]); __Requirements__ The ghoul is adjacent to the corpse of a creature that died within the last hour.  __Effect__  The ghoul regains 3d6 (3d6) Hit Points. It can regain Hit Points from any given corpse only once."
  - name: "Ghoul Fever"
    desc: "  __Saving Throw__ DC 22 Fortitude./n __Stage 1__ carrier with no ill effect (1 day)/n __Stage 2__ 2d6 (2d6) negative damage and regains half as many Hit Points from all healing (1 day)/n __Stage 3__ as stage 2 (1 day)/n __Stage 4__ 2d6 (2d6) negative damage and gains no benefit from healing (1 day)/n __Stage 5__ as stage 4 (1 day)/n __Stage 6__ dead, and rises as a [[ghoul|b1]] the next midnight (undefined)"
  - name: "Paralysis"
    desc: " ([[incapacitation]], [[occult]], [[necromancy]]);  Any living, non-elf creature hit by a ghoul's attack must succeed at a DC 22 Fortitude save or become [[paralyzed]]. It can attempt a new save at the end of each of its turns, and the DC cumulatively decreases by 1 on each such save."
  - name: "Pounce"
    desc: "⬻ The esobok ghoul Strides and then makes a claw Strike. If it began this action hidden, it remains hidden until after the Strike."
  - name: "Corrupted Touch"
    desc: "An esobok ghoul’s Strikes deal 1d6 negative damage to living creatures. A creature critically hit by an esobok ghoul’s Strike must attempt a DC 18 Fortitude save or become drained 1 (drained 2 on a critical failure) as rot spreads throughout their flesh."

speed: 30 feet

ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__: +15 (1d20+15); __Ref__: +13 (1d20+13); __Will__: +10 (1d20+10);"
hp: 90
health:
  - name: HP
    desc: "90; negative healing; __Immunities__ death effects, disease, paralyzed, poison, unconscious"
attacks:
  - name: Melee
    desc: "⬻ jaws +4 ([[magical]]); __Damage__ 1d10+7 (1d10+7) plus corrupted touch, ghoul fever, and paralysis"
  - name: Melee
    desc: "⬻ claw +14 ([[agile]], [[magical]]); __Damage__ 1d6+7 (1d6+7) slashing plus corrupted touch and paralysis"
spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 22; __2nd__ [[invisibility]] x3 self only;"

sourcebook: "Malevolence"
```

```encounter-table
name: Ghoul
creatures:
  - 1: Ghoul
```

![[Esobok Ghoul-20231218231558151.webp]]