Ignore---
<%*
	const dv = this.app.plugins.plugins["dataview"].api;
	
	const characters = await dv.pages()
		  .where(p => p.owner === "Robin")
		  .map(p => [ p.file.name ]);

	const quests = await dv.pages()
		  .where(it => it.tags =="quest")
		  .map(p => [ p.file.name ]);
		  
	const pathToLocations = "Worlds/1. Red Eclipse/3. Platser";
	const pathToSessions = "Worlds/1. Red Eclipse/5. Sessioner";
	
	const date = await tp.system.prompt("Date",tp.date.now('YYYY-MM-DD'), true)
	const year = date.substring(0, 4);
	
	/* Move file to correct folder (year) */
	await tp.file.move("/" + pathToSessions + "/" + year + "/" + date)
	
	/* Locations */
	const locations = await app.vault.getFolderByPath(pathToLocations)
		.children
		.filter(it => it.children)
		.flatMap(it => it.children)
		.map(it => ({
			"name": it.basename,
			"parent": it.parent.name
		})
	);
	const location = await tp.system.suggester(locations.map(it => it.parent === it.name ? it.name: it.parent + " / " + it.name), locations.map(it => it.name))

	/* Played Character */
	const character = await tp.system.suggester(characters, characters)
	const quest = await tp.system.suggester(quests, quests)
	
%>type: session
created: <% tp.date.now() %>
location: <% location %>
played: <% character %>
quest: <% quest %>
---
