let maxScore = document.querySelector("#max-score");
let player1Score = document.querySelector("#player1-score");
let player2Score = document.querySelector("#player2-score");

let btnP1 = document.querySelector("#btnP1");
let btnP2 = document.querySelector("#btnP2");
let btnReset = document.querySelector("#reset");

let isPlaying = true;
let p1Count = 0;
let p2Count = 0;

btnP1.addEventListener("click", (e) => {
  if (p1Count != maxScore.value && isPlaying) {
    p1Count += 1;
    player1Score.innerText = p1Count;
  } else {
    player1Score.classList.add("has-text-success");
    player2Score.classList.add("has-text-danger");
    btnP1.disabled = true;
    btnP2.disabled = true;
    isPlaying = false;
  }
});

btnP2.addEventListener("click", (e) => {
  if (p2Count != maxScore.value && isPlaying) {
    p2Count += 1;
    player2Score.innerText = p2Count;
  } else {
    player1Score.classList.add("has-text-danger");
    player2Score.classList.add("has-text-success");
    btnP1.disabled = true;
    btnP2.disabled = true;
    isPlaying = false;
  }
});

btnReset.addEventListener("click", (e) => {
  p1Count = 0;
  p2Count = 0;
  player1Score.innerText = p1Count;
  player2Score.innerText = p2Count;
  player1Score.classList.remove("has-text-success", "has-text-danger");
  player2Score.classList.remove("has-text-success", "has-text-danger");
  isPlaying = true;
  btnP1.disabled = false;
  btnP2.disabled = false;
});

maxScore.addEventListener("change", () => {
  p1Count = 0;
  p2Count = 0;
  player1Score.innerText = p1Count;
  player2Score.innerText = p2Count;
  isPlaying = true;
});
