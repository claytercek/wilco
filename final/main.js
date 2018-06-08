audioPlaying = true;
audioIcon = document.querySelector("#audioIcon");
var audio = document.querySelector("audio#jesus");
var clickAudio = new Audio("audio/click.mp3");

audioIcon.addEventListener("click", toggleAudio);

clickAudio.load();

var knobBottomCounter = 0;

var mySVG = document.getElementById("SVG");
var svgDoc;
var knobBottom;
var knobTop;

mySVG.addEventListener(
	"load",
	function() {
		svgDoc = mySVG.contentDocument;
		knobBottom = svgDoc.getElementById("KnobBottom");
		knobTop = svgDoc.getElementById("KnobTop");
		knobBottom.addEventListener("click", toggleAudio);
		knobTop.addEventListener("click", changeChannel);
		knobBottom.style.transform = "rotate(-30deg)";

		var promise = audio.play();

		promise.catch(() => {
			toggleAudio();
		});
	},
	false
);

function toggleAudio() {
	if (audioPlaying) {
		audioIcon.src = "imgs/audio-mute.svg";
		audio.pause();
		knobBottom.style.transform = "rotate(0deg)";
	} else {
		audioIcon.src = "imgs/audio-on.svg";
		setTimeout(function() {
			audio.play();
		}, 200);
		knobBottom.style.transform = "rotate(-30deg)";
	}
	audioPlaying = !audioPlaying;
	clickAudio.load();
	clickAudio.play();
}

video = document.querySelector("video");
black = document.querySelector("div.black");

var knobTopCounter = 0;

function changeChannel() {
	knobTopCounter += 15;
	knobTopCounter = knobTopCounter % 60;
	knobTop.style.transform = "rotate(-" + knobTopCounter + "deg)";
	clickAudio.load();
	clickAudio.play();
	switch (knobTopCounter) {
		case 15:
			black.style.zIndex = "-3";
			video.src = "./videos/vid1.mp4";
			video.play();
			video.style.opacity = "1";
			video.classList.add("videoOn");
			break;
		case 30:
			black.style.zIndex = "-3";
			video.src = "./videos/vid3.mp4";
			video.play();
			break;
		case 45:
			black.style.zIndex = "-3";
			video.src = "./videos/vid2.mp4";
			video.play();
			break;
		default:
			video.pause();
			black.style.zIndex = "-1";
			video.style.opacity = "0";
			video.classList.remove("videoOn");
	}
}
