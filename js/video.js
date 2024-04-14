var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video.autoplay = false;

	video.loop = false;

});



document.getElementById('play').addEventListener('click', function() {
	var video = document.getElementById('player1');
	var volumeDisplay = document.getElementById('volume');

	 var volumePercentage = video.volume * 100;

	 volumeDisplay.textContent = volumePercentage + '%';

	 video.play();
});



document.getElementById('pause').addEventListener('click', function() {
	var video = document.getElementById('player1');
	video.pause();
});


document.querySelector("#slower").addEventListener('click', function() {
		var video = document.getElementById('player1');
			video.playbackRate *= 0.9;

			console.log("New playback rate: " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener('click', function() {
		var video = document.getElementById('player1');
			video.playbackRate /= 0.9;

			console.log("New playback rate: " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener('click', function() {
		var video = document.getElementById('player1');

		video.currentTime += 10;

		console.log("skip")

	if (video.duration <= video.currentTime)
		video.currentTime = 0;

		console.log(video.currentTime)

	});

	document.querySelector("#mute").addEventListener('click', function() {
		var video = document.getElementById('player1');

		if (video.muted == true) {
			video.muted = false
			document.querySelector("#mute").innerHTML = "Mute"
		}

		else {
			video.muted = true
			document.querySelector("#mute").innerHTML = "Unmute"
		}

	});

	document.querySelector("#slider").addEventListener('change', function(){
		var video = document.getElementById('player1');

		video.volume = document.querySelector("#slider").value/100

		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	})


	document.getElementById("vintage").addEventListener("click", function() {
		var video = document.getElementById('player1');

		video.classList.add("oldSchool");
	});

	document.getElementById("orig").addEventListener("click", function() {
		var video = document.getElementById('player1');

		video.classList.remove("oldSchool");
	});