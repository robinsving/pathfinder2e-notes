---
obsidianUIMode: preview
noteType: pf2eMonster
aliases:
  - Elite Nosoi
  - Ezramalkun
tags:
  - pf2e/creature/type/monitor
  - pf2e/creature/level/1
statblock: inline
name: Nosoi (elite)
level: 1
draft: true
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B1"
name: "Nosoi (elite)"
level: "Creature 2"
alignment: "N"
size: "Tiny"
trait_03: "Monitor"
trait_04: "Psychopomp"
trait_05: "Elite"
modifier: 6
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__, __lifesense 60__;"
languages: "Chthonian, Empyrean, Infernal, Requian; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +8 (1d20+8); __Performance__: +8 (1d20+8); __Religion__: +8 (1d20+8); __Society__: +4 (1d20+4); __Stealth__: +8 (1d20+8); __Boneyard lore__: +10 (1d20+10); __Library lore__: +10 (1d20+10); "
abilityMods: [-1, 3, 1, 1, 1, 3]

abilities_top:
  - name: "Lifesense"
    desc: " ([[divination]], [[divine]]);  A psychopomp senses the vital essence of living and undead creatures within the listed range."
abilities_bot:
  - name: "Change Shape"
    desc: "⬻ ([[concentrate]], [[divine]], [[polymorph]], [[transmutation]]);  The nosoi takes the appearance of a raven or songbird. This doesn't change its Speed or its attack and damage modifiers with its [[Strike|Strikes]]."
  - name: "Haunting Melody"
    desc: "⬻ ([[auditory]], [[concentrate]], [[divine]], [[enchantment]], [[incapacitation]], [[mental]]);  The nosoi croons an entrancing song. Each living or undead creature within a 60-foot emanation must attempt a DC 18 Will save. The effect lasts for 1 round, but a nosoi can use this ability again on subsequent rounds to extend the duration by 1 round for all affected creatures. A creature that succeeds at any save is temporarily immune for 24 hours. Despite being a [[mental]] effect, this ability affects mindless undead. Psychopomps are immune to this ability.\n__Failure__ The creature is [[fascinated]].\n__Critical Failure__ As failure, and the creature must spend each of its actions on its turn to move closer to the nosoi as expediently as possible while avoiding obvious dangers. If a [[fascinated]] creature is adjacent to the nosoi, it stays still and doesn't act. If the creature is attacked, the fascination ends."
  - name: "Spirit Touch"
    desc: "  A nosoi's [[Strike|Strikes]] affect incorporeal creatures as though etched with a ghost touch property rune and deal 1d6 (1d6) negative damage to living creatures or 1d6 (1d6) positive damage to undead."

speed: 15 feet, fly 40 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +6 (1d20+6); __Ref__: +10 (1d20+10); __Will__: +8 (1d20+8);"
hp: 18
health:
  - name: HP
    desc: "18;  __Immunities__ death effects, disease;"
attacks:
  - name: Melee
    desc: "⬻ beak +8 ([[finesse]], [[magical]]); __Damage__ 1d4+1 (1d4+1) piercing plus spirit touch"

spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 18 (+4 dmg); __2nd__ [[invisibility]] at will; self only, [[Noise Blast]]; __4th__ [[read omens]], [[talking corpse]];"
sourcebook: "_Bestiary_, page 270."
```

```encounter-table
name: Nosoi
creatures:
  - 1: Nosoi
```