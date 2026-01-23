const video = document.querySelector("video");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const currentTime = document.querySelector("#current-time");

playBtn.addEventListener("click", () => video.play());
pauseBtn.addEventListener("click", () => video.pause());
stopBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
});

video.addEventListener(
  "timeupdate",
  () => (currentTime.textContent = video.currentTime),
);
