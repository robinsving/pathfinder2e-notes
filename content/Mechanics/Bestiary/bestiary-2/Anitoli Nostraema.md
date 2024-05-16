---
obsidianUIMode: preview
noteType: pf2eMonster
aliases:
  - Anitoli Nostraema
tags:
  - pf2e/creature/type/undead
  - pf2e/creature/level/4
statblock: inline
name: Anitoli Nostraema
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Malevolence"
name: "Anitoli Nostraema"
level: "Creature 6"
alignment: "NE"
size: "Small"
trait_03: "Undead"
trait_04: "Unique"
modifier: 10
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__;"
languages: "Common, Aklo; "
skills:
  - name: "Skills"
    desc: "__Deception__: +14 (1d20+14); Occultism: +13 (1d20+13); __Stealth__: +15 (1d20+15); "
abilityMods: [0, 5, 2, 3, 5, 4]

abilities_mid:
  - name: "Aura of Sobs"
    desc: " ([[auditory]], [[aura]], [[emotion]], [[enchantment]], [[mental]], [[occult]]);  10 feet. An attic whisperer enshrouds itself in a tapestry of stolen voices. Each living creature that enters or starts their turn in the aura must succeed at a DC 21 Will save or the unnerving, bitter sobs render them distraught and they become [[stupefied|stupefied 1]] for as long as they remain within the aura. A creature that succeeds is temporarily immune for 1 hour. The attic whisperer can activate or deactivate the aura with a single free action, which has the [[concentrate]] trait."
  - name: "Whispered Despair"
    desc: "⬲ __Trigger__ A creature with an active [[emotion]] effect enters an attic whisperer's aura of sobs __Effect__  The attic whisperer attempts to counteract the [[emotion]] effect, with a counteract modifier of +13."
abilities_bot:
  - name: "Steal Breath"
    desc: " ([[curse]], [[incapacitation]], [[necromancy]], [[occult]]);  The attic whisperer siphons the breath from living creatures, sapping their strength. A living creature hit by a jaws [[Strike]] must attempt a DC 24 Fortitude save.\n__Critical Success__ The target is unaffected.\n__Success__ The target is [[enfeebled|enfeebled 1]] for 1 round.\n__Failure__ The target is [[enfeebled|enfeebled 1]] for 24 hours and [[fatigued]].\n__Critical Failure__ The target is [[enfeebled|enfeebled 1]] for 24 hours, is [[fatigued]], and falls [[unconscious]]."
  - name: "Steal Voice"
    desc: " ([[curse]], [[necromancy]], [[occult]]);  When an attic whisperer hits a living creature with a bony hand [[Strike]], it tries to pull the victim's voice into its aura. The victim must attempt a DC 24 Will save.\n__Critical Success__ The target is unaffected.\n__Success__ The target's voice is weak for 1 minute. Anytime it attempts an action with the [[auditory]] trait, it must succeed at a DC 5 flat check or the action is lost.\n__Failure__ The target loses the ability to speak for 1 hour, until the curse is removed, or until the attic whisperer is destroyed, whichever comes first. During this time, the attic whisperer can perfectly mimic the target's voice, and the target takes a –2 circumstance penalty to saving throws against that attic whisperer's aura of sobs.\n__Critical Failure__ As failure, but the effects lasts until the attic whisperer is destroyed or the curse is removed."

speed: 20 feet

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +12 (1d20+12); __Ref__: +12 (1d20+12); __Will__: +15 (1d20+15);"
hp: 95
health:
  - name: HP
    desc: "95; negative healing; __Immunities__ poison, death effects, disease, paralyzed, poison, unconscious;"
attacks:
  - name: Melee
    desc: "⬻ jaws +17 ([[agile]], [[finesse]]); __Damage__ 3d8 (3d8) piercing plus steal breath"
  - name: Melee
    desc: "⬻ bony hand (agile) +17 __Damage__ 2d12 (2d12) negative plus steal voice"

sourcebook: "_Bestiary 2_, page 28."
```

```encounter-table
name: Anitoli Nostraema
creatures:
  - 1: Anitoli Nostraema
```
