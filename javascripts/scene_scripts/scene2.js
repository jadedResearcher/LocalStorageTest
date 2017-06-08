//each scene is responsible for knowing how to write things onto screen (including links)


function getSceneHTML(){
	var ret = "That's right! Their name was " + localStorage.username +"!";
	ret += "<Br><Br> Anyways, because " + localStorage.username + " was such an intelligent and discerning denizen of the internet,";
	ret += " they liked to play gambling games in weird experimental tests.";
	ret += "<br><br> Do you think that a random number will be higher than, or lower than 50? ";
	if(!localStorage.random_number){
		var random_number = Math.random() *1000; //Mwa-ha-ha-ha
		localStorage.random_number = random_number;
	}
	ret += "<br><br>";

	//but ALSO, I want it so that if they take too long to guess, they get the third option
	return ret+getNextScenes();
}

function getNextScenes(){
	var ret = "";
	if(isSceneCompleted(scene)){
		//TODO instead have a link to what they chose here (can check table of contents)
		var nextChapter = getNextChapter();
		return "<font color ='grey'><a href = '"+ nextChapter+"'>You'll need to start over to redo this choice.</a> </font>"
	}
	if(localStorage.random_number > 50){
		ret += "<a href = 'scene3.html?completed=" +scene+"'>Definitely Higher</a>";
		ret += "<br><br><a href = 'scene4.html?completed=" +scene+"'>Definitely Lower</a>";
	}else{
		ret += "<a href = 'scene4.html?completed=" +scene+"'>Definitely Higher</a>";
		ret += "<br><br><a href = 'scene3.html?completed=" +scene+"'>Definitely Lower</a>";
	}
	return ret;
}
