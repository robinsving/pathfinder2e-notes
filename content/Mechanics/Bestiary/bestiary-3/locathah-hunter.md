---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Locathah Hunter"
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
source: "B3"
name: "Locathah Hunter"
level: "Creature 3"
alignment: "N"
size: "Medium"
trait_03: "Amphibious"
trait_04: "Humanoid"
trait_05: "Locathah"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __low-light vision__;"
languages: "Thalassic, Common; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +11 (1d20+11); __Diplomacy__: +5 (1d20+5); __Nature__: +7 (1d20+7); __Stealth__: +8 (1d20+8); __Survival__: +7 (1d20+7); "
abilityMods: [4, 3, 0, 1, 2, 0]

abilities_bot:
  - name: "Cooperative Hunting"
    desc: "  After the hunter attempts a [[Strike]] at a Large or larger target (regardless of success or failure), the next [[Strike]] one of the hunter's allies makes against the same target gains a +2 circumstance bonus to the attack roll."
  - name: "Fan Bolt"
    desc: "  The hunter prepares their hooked crossbow bolts with carefully woven seaweed. On a successful crossbow [[Strike]], the bolt embeds and the seaweed fan deploys. The target takes a –10-foot status penalty to its swim Speed. A creature can [[Interact]] to attempt a DC [[compendium/skills.md#Athletics|Athletics]] check, removing the bolt on a success."
  - name: "Hunt Prey"
    desc: "⬻ ([[concentrate]]);  The locathah hunter designates a single creature they can see and hear, or one they're [[Track|Tracking]], as their prey. The hunter gains a +2 circumstance bonus to [[compendium/skills.md#Perception|Perception]] checks to [[Seek]] the prey and to [[compendium/skills.md#Survival|Survival]] checks to [[Track]] the prey. The first time the locathah hits their designated prey in a round, they deal an additional 1d8 (1d8) precision damage. These effects last until the hunter uses Hunt Prey again."
  - name: "Pack Attack"
    desc: "  The hunter's [[Strike|Strikes]] deal an additional 1d8 (1d8) damage to creatures within reach of at least two of the hunter's allies."
  - name: "Smooth Swimmer"
    desc: "  The locathah hunter ignores [[difficult terrain]] caused by aquatic terrain features."
abilities_top:
  - name: Items
    desc: "crossbow (12 fan bolts), longspear, scale mail;"

speed: 10 feet, swim 40 feet; smooth swimmer;

ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__: +7 (1d20+7); __Ref__: +10 (1d20+10); __Will__: +9 (1d20+9);"
hp: 38
health:
  - name: HP
    desc: "38; "
attacks:
  - name: Melee
    desc: "⬻ longspear +11 ([[reach|reach 10 feet]]); __Damage__ 1d8+4 (1d8+4) piercing"
  - name: Melee
    desc: "⬻ crossbow +10 ([[range|range increment 120 feet]], [[reload|reload 1]]); __Damage__ 1d8 (1d8) piercing plus fan bolt"

sourcebook: "_Bestiary 3_, page 164."
```

```encounter-table
name: Locathah Hunter
creatures:
  - 1: Locathah Hunter
```
