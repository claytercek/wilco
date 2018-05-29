audioPlaying = true;
audioIcon = document.querySelector("#audioIcon");
var audio = document.querySelector("audio");

audioIcon.addEventListener("click", function() {
	if (audioPlaying) {
		audioIcon.src = "imgs/audio-mute.svg";
		audio.pause();
	} else {
		audioIcon.src = "imgs/audio-on.svg";
		audio.play();
	}
	audioPlaying = !audioPlaying;
});
