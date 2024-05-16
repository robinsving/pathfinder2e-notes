---
<%* 
	const date = await tp.system.prompt("Date",tp.date.now('YYYY-MM-DD'), true)
	const year = date.substring(0, 4);
	await tp.file.rename(date)
	
	/* Move file to correct folder (year) */
	await tp.file.move("/Worlds/1. Red Eclipse/5. Sessioner/" + year + "/" + tp.file.title)
	
	const locations = await app.vault.getFolderByPath("Worlds/1. Red Eclipse/3. Platser").children.filter(item => item.children).map(item => item.name);
	const location = await tp.system.suggester(locations, locations)
%>
title: 
type: session
location: <% location %>
---
