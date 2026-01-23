const audio = document.querySelector("audio");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const currentTime = document.querySelector("#current-time");
const volume = document.querySelector("#volume");

playBtn.addEventListener("click", () => audio.play());
pauseBtn.addEventListener("click", () => audio.pause());
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

audio.addEventListener("timeupdate", () => {
  currentTime.innerText = audio.currentTime;
});

volume.addEventListener("change", () => (audio.volume = volume.value));
