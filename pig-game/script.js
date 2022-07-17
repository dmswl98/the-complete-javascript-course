const $player0 = document.querySelector('.player--0');
const $player1 = document.querySelector('.player--1');
const $score0 = document.querySelector('#score--0');
const $score1 = document.querySelector('#score--1');
const $currentScore0 = document.querySelector('#current--0');
const $currentScore1 = document.querySelector('#current--1');
const $dice = document.querySelector('.dice');
const $newGameButton = document.querySelector('.btn--new');
const $rollDiceButton = document.querySelector('.btn--roll');
const $holdButton = document.querySelector('.btn--hold');

let activePlayer, score, currentScore;

const init = () => {
  activePlayer = 0;
  score = [0, 0];
  currentScore = 0;
  $rollDiceButton.addEventListener('click', RollDice);
  $holdButton.addEventListener('click', getCurrentScore);
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).innerText = 0;
  currentScore = 0;
  activePlayer = activePlayer ? 0 : 1;
  $player0.classList.toggle('player--active');
  $player1.classList.toggle('player--active');
};

const winGame = () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  $rollDiceButton.removeEventListener('click', RollDice);
  $holdButton.removeEventListener('click', getCurrentScore);
};

const RollDice = () => {
  let dice = Math.floor(Math.random() * 6 + 1);
  $dice.setAttribute('src', `dice-${dice}.png`);
  if (dice === 1) switchPlayer();
  else {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).innerText =
      currentScore;
  }
};

const getCurrentScore = () => {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).innerText =
    score[activePlayer];

  if (score[activePlayer] >= 30) winGame();
  else switchPlayer();
};

$newGameButton.addEventListener('click', () => {
  init();
  $player0.classList.remove('player--winner', 'player--active');
  $player1.classList.remove('player--winner', 'player--active');
  $player0.classList.add('player--active');
  $score0.textContent = 0;
  $score1.textContent = 0;
  $currentScore0.textContent = 0;
  $currentScore1.textContent = 0;
});
init();
