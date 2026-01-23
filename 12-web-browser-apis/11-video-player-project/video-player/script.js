const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const playPause = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateIcon = () => {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
  }
};

const stopVideo = () => {
  video.pause();
  video.currentTime = 0;
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
};

const setProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

video.addEventListener("click", playPause);
playBtn.addEventListener("click", playPause);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
stopBtn.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", setProgress);
