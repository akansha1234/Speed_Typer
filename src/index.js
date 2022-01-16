const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving"
];
let word = document.querySelector(".word");
let timer = document.querySelector(".timer");
let score = document.querySelector(".score");
let input = document.querySelector(".input-text");
let endgameEl = document.querySelector(".end-game");
let level = document.querySelector("#opt").value;
let counter = document.querySelector(".counter");
let section = document.querySelector(".section");
let time = 10;
let count = 0;
let len;
let setTime = setInterval(updateTime, 1000);
input.focus();
console.log(level);
localStorage.setItem("difficulty", `${level}`);
let difficulty = localStorage.getItem("difficulty");
if (difficulty === "Difficult") {
  time += 2;
} else if (difficulty === "Medium") {
  time += 3;
} else {
  time += 5;
}
console.log(time);
function updateTime() {
  if (time >= 0) {
    timer.innerHTML = `Time : ${time}s`;
    time--;
  }
  if (time === 0) {
    clearInterval(setTime);
    gameOver();
  }
}

function updateWords() {
  len = Math.floor(Math.random() * words.length);
  word.innerText = words[len];
}
function updateScore() {
  count += 1;
  score.innerHTML = `Score : ${count}`;
}
input.addEventListener("input", (e) => {
  // console.log(input.value);
  // console.log(words[len]);
  if (input.value === words[len] && time > 0) {
    updateWords();
    updateScore();
    e.target.value = "";
    updateTime();
  }
});
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <h3>Your final score is ${count}</h3>
    <button onclick="location.reload()">Reload</button>
  `;
  endgameEl.style.display = "flex";
  counter.style.opacity = "0";
  section.style.opacity = "0";
  endgameEl.style.opacity = "1";
}
updateWords();
