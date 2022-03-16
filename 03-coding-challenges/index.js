const generateInput = document.querySelector("#given-num");
const playForm = document.querySelector("#play-form");
const playInput = document.querySelector("#play-form input");
const hiddenDiv = document.querySelector("div");
const hiddenProgress = document.querySelector(".hidden h3:first-child");
const hiddenResult = document.querySelector(".hidden h3:last-child");

const HIDDEN = "hidden";

function negNumberValidator(num) {
  if (num === null) return false;
  return num >= 0;
}

function isValueInRange(value, maxNum) {
  return value >= 0 && value <= maxNum;
}

function showGameResult(guessNum, maxNum) {
  hiddenDiv.classList.remove(HIDDEN);
  // console.log("Guess Num: " + guessNum, "Max Num: " + maxNum);
  const machineChose = Math.floor(Math.random() * (parseInt(maxNum, 10) + 1));
  hiddenProgress.innerHTML = `You Chose: ${guessNum}, the machine chose: ${machineChose}`;
  if (guessNum === machineChose) {
    hiddenResult.innerHTML = `You Win!`;
  } else {
    hiddenResult.innerHTML = `You Lost!`;
  }
}

function playGame(value, maxNum) {
  if (isValueInRange(value, maxNum)) {
    showGameResult(value, maxNum);
  } else {
    alert("The guessing number should be in the range of number.");
  }
}

function submitListener(event) {
  event.preventDefault();
  if (negNumberValidator(generateInput.value)) {
    const guessNum = parseInt(playInput.value, 10);
    const maxNum = parseInt(generateInput.value, 10);
    playGame(guessNum, maxNum);
  } else {
    alert("The range should be non-empty and positive.");
    console.log(generateInput.value);
  }
}

playForm.addEventListener("submit", submitListener);
