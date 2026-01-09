#!/bin/bash
#–-exclude '__Meta'
rsync -r --delete /mnt/c/_Data/Documents/Robin/Spel/Pathfinder/Pathfinder\ Vault/Worlds/ content/Worlds
npx quartz sync