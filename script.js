'use strict';

// Player 0
const player0El = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');

// Player 1
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial Active Player
const scores = [0, 0];
let activePlayer;
let currentScore;
let playing;

const changeActivePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

function resetGame() {
  activePlayer = 0;
  currentScore = 0;
  scores[0] = scores[1] = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  playing = true;

  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');

  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  current0El.textContent = 0;
  current1El.textContent = 0;
}

btnRollDice.addEventListener('click', function () {
  if (!playing) {
    return;
  }

  const random = Math.trunc(Math.random() * 6) + 1; // 0 - 6

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${random}.png`;

  let currentScoreEl = document.getElementById(`current--${activePlayer}`);
  if (random === 1) {
    changeActivePlayer();
  } else {
    currentScore += random;

    currentScoreEl.textContent = currentScore;
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) {
    return;
  }
  scores[activePlayer] += currentScore;
  const score = scores[activePlayer];
  const currentScoreEl = document.getElementById(`score--${activePlayer}`);
  currentScoreEl.textContent = score;

  if (score >= 100) {
    playing = false;
    diceEl.classList.add('hidden');

    const currentPlayer = document.querySelector(`.player--${activePlayer}`);

    currentPlayer.classList.remove('player--active');
    return currentPlayer.classList.add('player--winner');
  }

  changeActivePlayer();
});

btnNewGame.addEventListener('click', resetGame);

resetGame();
