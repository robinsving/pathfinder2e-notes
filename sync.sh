#!/bin/bash
#–-exclude '__Meta'
rsync -r --delete /mnt/d/Cloud/Documents/Robin/Spel/Pathfinder/Obsidian/Worlds/ content/Worlds
npx quartz sync