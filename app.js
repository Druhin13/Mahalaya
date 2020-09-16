//function play() {
//	var audio = new Audio('https://www.mboxdrive.com/mahalaya.mp3');
//	audio.play();
//	document.getElementById("play").style.display = "none";
//	document.getElementById("pause").style.display = "block";
//}
//
//function pause() {
//	var audio = new Audio('https://www.mboxdrive.com/mahalaya.mp3');
//	audio.pause();
//	document.getElementById("play").style.display = "block";
//	document.getElementById("pause").style.display = "none";
//}



var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
	isPlaying ? myAudio.pause() : myAudio.play();
	document.getElementById("play").style.display = "none";
	document.getElementById("pause").style.display = "block";
};

myAudio.onplaying = function () {
	isPlaying = true;
};
myAudio.onpause = function () {
	isPlaying = false;
	document.getElementById("play").style.display = "block";
	document.getElementById("pause").style.display = "none";
};