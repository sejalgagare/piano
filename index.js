const keys = document.querySelectorAll(".key");
const regulars = document.querySelectorAll(".key.white");
const sharps = document.querySelectorAll(".key.black");
const whites = ["a", "s", "d", "f", "g", "h", "j", "k"];
const blacks = ["w", "e", "r", "t", "y"];
const white = document.getElementById("newColor");

const changeButton = document.getElementById("change");

const changeToNormal = document.getElementById("changeToNormal");

const waveImage = document.getElementById("waveImage");

var numberOfWhiteButtons = document.querySelectorAll(".white").length;

var numberOfBlackButtons = document.querySelectorAll(".black").length;

changeButton.addEventListener("click", () => {
  for (var i = 0; i < numberOfWhiteButtons; i++) {
    regulars[i].classList.add("yellow");
  }
  for (var i = 0; i < numberOfBlackButtons; i++) {
    sharps[i].classList.add("orange");
  }
  // alert("helo");
  console.log("ojfalf");
});

changeToNormal.addEventListener("click", () => {
  for (var i = 0; i < numberOfWhiteButtons; i++) {
    regulars[i].classList.remove("yellow");
  }
  for (var i = 0; i < numberOfBlackButtons; i++) {
    sharps[i].classList.remove("orange");
  }
});

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whites.indexOf(key);
  const blackKeyIndex = blacks.indexOf(key);

  if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
});

let playNote = (key) => {
  const noteSound = document.getElementById(key.dataset.note);
  noteSound.currentTime = 0;
  noteSound.play();
  key.classList.add("active");
  waveImage.classList.add("show");

  setTimeout(function () {
    key.classList.remove("active");
  }, 100);

  setTimeout(function () {
    waveImage.classList.remove("show");
  }, 500);
  // noteSound.addEventListener("ended", () => {
  //   key.classList.remove("active");
  // });
};
