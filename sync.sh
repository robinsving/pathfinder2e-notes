#!/bin/bash
#–-exclude '__Meta'
rsync -r --delete /mnt/d/Cloud/Documents/Robin/Spel/Pathfinder/Pathfinder\ Vault/Worlds/ content/Worlds
npx quartz sync