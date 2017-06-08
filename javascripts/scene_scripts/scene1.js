//each scene is responsible for knowing how to write things onto screen (including links)


function getSceneHTML(){
	var ret = "Once upon a time there was a super smart, discerning web denizen.  What was their name again?";
	if(!isSceneCompleted(scene)){
		ret += ' <input type="text" name="username" id = "username" onkeyup="saveName()">';
	}
	ret+= "<Br>";
	return ret+getNextScenes();
}

function getNextScenes(){
	var ret = "";
	if(isSceneCompleted(scene)){
		return "<font color= 'grey'>You'll need to start over to redo this choice. </font>"
	}
	ret+= "<a href = 'scene2.html?completed=" +scene+"'>Continue...</a>";
	return ret;
}
