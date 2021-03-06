//handles loading and saving local storage information


function wipeEverything(){
	localStorage.clear();
	location.reload(true);
}

function wipeContents(){
	localStorage.removeItem("tableContents");
}

function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function saveName(){
	localStorage.username = $("#username").val();
}

function isSceneCompleted(scene_url){
	if(localStorage.completed_scenes){
		var chapters = localStorage.completed_scenes.split(";");
		if(chapters.indexOf(scene_url) != -1){ 
			return true;
		}
	}
	return false;
}

//if rereading already completed chapters, what comes next?
function getNextChapter(){
	var chapters = localStorage.tableContents.split(";");
	chapters.pop(); //remove inevitable empty string at the end
	//check each chapter for scene url that matches global var scene
	for(var i = 0; i<chapters.length; i++){
		var pieces = chapters[i].split("~~~");
		if(pieces[0] == scene && i < (chapters.length-1)){
			var next_pieces = chapters[i+1].split("~~~");
			return next_pieces[0];
		}
	}
	return null;
}

function saveLastSceneToCompleted(scene_url){
	if(localStorage.completed_scenes){
		var chapters = localStorage.completed_scenes.split(";");
		if(chapters.indexOf(scene_url) == -1){ //only add if not already in there.
			localStorage.completed_scenes += scene_url  +";"; //don't add ; until very end, prevents recognizing repeat
		}
	}else{
		localStorage.completed_scenes = scene_url + ";";
	}
}

function saveSceneToContents(scene_url,scene_title){
	if(localStorage.tableContents){
		var to_add = scene_url+"~~~"+scene_title;
		var chapters = localStorage.tableContents.split(";");
		if(chapters.indexOf(to_add) == -1){ //only add if not already in there.
			localStorage.tableContents += to_add  +";"; //don't add ; until very end, prevents recognizing repeat
		}
	}else{
		localStorage.tableContents = scene_url+"~~~"+scene_title+";";
	}
}

function htmlForContents(){
	if(localStorage.tableContents){
		return parseContents();
	}else{
		return "This is an experiment in data persistance in HTML 5 and ALSO a story creator. <br><br><a href = 'scene1.html'>Enjoy!</a>";
	}
}

function parseContents(){
	//parse into scene_url+"~~~"+scene_title+";"  chunks
	//for each chunk, create a line in a list
	var ret = "<ul>";
	var contents_unparsed = localStorage.tableContents
	//var contents_unparsed = "scenes/scene1.html~~~An Adventure Begins;scenes/scene2.html~~~An Adventure Begins II: Electric Boogaloo;" 
	var chapters = contents_unparsed.split(";");
	chapters.pop(); //remove inevitable empty string at the end
	for(var i = 0; i<chapters.length; i++){
		var pieces = chapters[i].split("~~~");
		ret += "<li> Chapter " + (i+1) + ": <a href = '" +pieces[0]+"'>" + pieces[1] + "</a> </li>" ;
	}
	ret += "</ul>"
	return ret;
}
