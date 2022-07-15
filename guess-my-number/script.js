const $bodyColor = document.querySelector('body');
const $againBtn = document.querySelector('.again');
const $answer = document.querySelector('.number');
const $guessInput = document.querySelector('.guess');
const $checkBtn = document.querySelector('.check');
const $message = document.querySelector('.message');
const $score = document.querySelector('.score');
const $highscore = document.querySelector('.highscore');

let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
let currentScore = Number($score.innerHTML);
let highScore = 0;

const displayMessage = (msg) => {
  $message.textContent = msg;
};

const restart = () => {
  randomNumber = Math.floor(Math.random() * 20);
  console.log(randomNumber);
  $guessInput.value = '';
  $score.textContent = 20;
  currentScore = Number($score.innerHTML);
  displayMessage('Start guessing..');
  $answer.textContent = '?';
  $bodyColor.style.backgroundColor = '#222';
};

$againBtn.addEventListener('click', restart);

const playGame = function () {
  if ($guessInput.value === '') {
    displayMessage('⛔ No number!');
    return;
  }
  const userGuessInput = Number($guessInput.value);
  checkInput(userGuessInput);
};

$checkBtn.addEventListener('click', playGame);

const valid = (input) => {
  if (input < 1 || input > 20) {
    displayMessage('Between 1 and 20!');
    return false;
  }
  return true;
};

const win = () => {
  displayMessage('🎉 Correct Number');
  highScore = Math.max(highScore, currentScore);
  $highscore.textContent = highScore;
  $bodyColor.style.backgroundColor = '#60b347';
  $answer.textContent = randomNumber;
};

const lose = () => {
  $bodyColor.style.backgroundColor = '#d62741';
  $score.textContent = 0;
  $answer.textContent = randomNumber;
};

const checkInput = (input) => {
  if (!valid(input)) return;

  if (input < randomNumber) {
    displayMessage('📉 Too low!');
    $score.textContent = --currentScore;
  } else if (input > randomNumber) {
    displayMessage('📈 Too high!');
    $score.textContent = --currentScore;
  } else {
    win();
  }

  if (currentScore === 0) {
    lose();
  }
};
