//each scene is responsible for knowing how to write things onto screen (including links)


function getSceneHTML(){
	var ret = "You won!  The number was: " + localStorage.random_number+".";
	if(localStorage.random_number > 100){
		ret += " Of course...now you see you weren't really that discerning to begin with! I never told you 'out of how many', so the odds were NOT 50/50 that was implied.."
	}else{
		ret += " You lucky devil, you."
	}

	return ret;
}
