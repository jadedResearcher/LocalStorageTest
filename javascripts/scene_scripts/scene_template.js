//each scene is responsible for knowing how to write things onto screen (including links)


function getSceneHTML(){
	var ret = "";
	
	
	return ret+getNextScenes();
}

function getNextScenes(){
	var ret = "";
	if(isSceneCompleted(scene)){
		return "<font = 'grey'>You'll need to start over to redo this choice. </font>"
	}
	ret+= "<a href = 'scene_template.html?completed=" +scene+"'>Continue...</a>";
	return ret;
}
