const video = document.getElementById("myVideo");
const btnPause = document.getElementById("btnPause");

btnPause.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    btnPause.textContent = "Pause";
  } else {
    video.pause();
    btnPause.textContent = "Continue";
  }
});

const btnMute = document.getElementById("btnMute");
const btnUnmute = document.getElementById("btnUnmute");

btnMute.addEventListener("click", function() {
  video.muted = true;
});

btnUnmute.addEventListener("click", function() {
  video.muted = false;
});