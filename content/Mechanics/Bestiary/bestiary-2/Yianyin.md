---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: 
tags:
  - pf2e/creature/type/monitor
  - pf2e/creature/level/5
statblock: inline
level: 7
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B2"
name: "Yianyin"
level: "Creature 7"
alignment: "NE"
size: "Medium"
trait_02: "Unique"
trait_03: "Monitor"
trait_04: "Psychopomp"
modifier: 16
perception:
  - name: "Perception"
    desc: "Perception +16; __darkvision__, __lifesense 60__;"
languages: "Abyssal, Celestial, Infernal, Requian; telepathy 120 feet, tongues;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +17 (1d20+17); __Diplomacy__: +17 (1d20+17); __Intimidation__: +17 (1d20+17); __Medicine__: +16 (1d20+16); __Occultism__: +14 (1d20+14); __Religion__: +16 (1d20+16); __Boneyard lore__: +16 (1d20+16); "
abilityMods: [0, 6, 5, 3, 5, 6]

abilities_mid:
  - name: "Unnerving Presence"
    desc: " ([[aura]], [[divine]], [[fear]], [[emotion]], [[enchantment]], [[incapacitation]]); 30 feet. A creature that begins its turn within the aura must attempt a DC 22 Will save./n **Critical Success** The creature is unaffected and becomes temporarily immune to unnerving presence for 24 hours./n **Success** The creature’s attack rolls take a –1 status penalty for 1 round./n **Failure** The creature feels Yianyin’s eyeless gaze upon them but knows that something far more dangerous and monstrous watches them through those empty sockets. The overwhelming presence of this alien intelligence causes the creature to become slowed 1 for 1 round as they shake and tremble with fear./n **Critical Failure** As failure, but the creature is instead stunned 1 and knows the name of what watches from those empty eyes: Tchekuth."
abilities_bot:
  - name: "Compel Condemned"
    desc: "⬻ ([[divine]], [[enchantment]], [[incapacitation]], [[mental]]);  The catrina telepathically compels a creature within 30 feet to approach and allow the catrina to kiss them, in preparation for using Kiss of Death. The target must attempt a DC 25 Will save.\n__Success__ The creature is unaffected and is temporarily immune to Compel Condemned for 24 hours.\n__Failure__ The creature must spend each of its actions to move closer to the catrina as quickly as possible, while avoiding obvious dangers. If the compelled creature is adjacent to the catrina, it stays still and doesn't act. If the creature takes any damage, the effect ends and the creature is temporarily immune to Compel Condemned for 24 hours. This effect lasts for 1 round, but if the catrina uses this ability again on subsequent rounds, it extend the duration by 1 round for all affected creatures.\n__Critical Failure__ As failure, but damage does not end the effect."
  - name: "Kiss of Death"
    desc: "⬺ ([[death]], [[divine]], [[manipulate]], [[necromancy]]);  The catrina gives a long, passionate kiss to an [[unconscious]] or willing creature, dealing 4d6 (4d6) negative damage. Any creature damaged by the same catrina's Kiss of Death for 3 consecutive rounds becomes [[unconscious]] and is [[dying|dying 1]]."
  - name: "Corrupted Touch"
    desc: "Yianyin’s Strikes deal 2d6 negative damage to living creatures. A creature critically hit by Yianyin’s Strike must attempt a DC 18 Fortitude save or become drained 1 (drained 2 on a critical failure) as rot spreads throughout their flesh."

speed: 25 feet

ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__: +14 (1d20+14); __Ref__: +17 (1d20+17); __Will__: +16 (1d20+16); +1 status to all saves vs. magic;"
hp: 115
health:
  - name: HP
    desc: "115;  __Immunities__ death effects, disease; __Resistances__ negative 7, poison 7"
attacks:
  - name: Melee
    desc: "⬻ fist +18 ([[agile]], [[finesse]]); __Damage__ 2d8+2 (2d8+2) bludgeoning plus corrupted touch"

spellcasting:
  - name: "Occult Innate Spells"
    desc: "DC 25; __Cantrips (4th)__ [[Dancing Lights]]; __2nd__ [[invisibility]] (at will) self only; __3rd__ [[illusory disguise]]; __4th__ [[Confusion]], [[Phantasmal Killer]]; __Constant__ __(5th)__ [[Tongues]];"
sourcebook: "_Bestiary 2_, page 209."
```

```encounter-table
name: Yianyin
creatures:
  - 1: Yianyin
```

![[Yianyin-20231218235116669.webp]]