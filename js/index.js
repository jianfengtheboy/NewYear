window.onload = function(){	
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	
	//音乐播放完停止的时候，自动停止光盘转动
	audio.addEventListener("ended", function(event){
		music.setAttribute("class","");
		//this.style.animationPlayState = "paused";
		//this.style.webkitAnimationPlayState = "paused";
	},false);
	
	music.addEventListener("touchstart", function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState = "running";
			//this.style.webkitAnimationPlayState = "running";
		}else{
			audio.pause();
			this.setAttribute("class","");
			//this.style.animationPlayState = "paused";
			//this.style.webkitAnimationPlayState = "paused";
		}
	},false);
	
	page1.addEventListener("touchstart", function(event){
		page1.style.display = "none";
		page2.style.display = "block";
	},false);
	
}

