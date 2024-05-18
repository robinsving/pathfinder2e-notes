#!/bin/bash

################# USAGE ###############
# Create a file called todo.md with has the following format (blank spaces allowed anywhere)
# Line x: name of file. Must start with Cantrip or Level
# Lines x++: name of line to add
#   lines will be added under traditions: [...] line
#######################################

current_file=""

while read -r line;
do
    # ignore empty line
    [ -z "$line" ] && continue

    ## if line starts with the term Cantrip or Level then it is a new file
    if [[ $line == Cantrip* ]] || [[ $line == Level* ]];
    then
        echo "New file: $line"
        current_file=$line
        if [ ! -f "$current_file" ]; then
            echo "WARNING: this files does not exist";
            exit 1
        fi
    else
        echo "Update line $line in $current_file"
        echo "$current_file" | tr '\r\n' '\0' | xargs -0 sed -i -e "s|^\(traditions.*\)$|\1\n$line|"
    fi

done < todo.md

#tr '\r\n' '\0' <files.txt | xargs -d '\r\n' -0 