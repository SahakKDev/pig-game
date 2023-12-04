'use strict';

// Player 0
const player0El = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const currentScore0El = document.getElementById('current--0');

// Player 1
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial Active Plauer
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

function resetGame() {
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');

  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

btnRollDice.addEventListener('click', function () {
  const random = Math.trunc(Math.random() * 6) + 1; // 0 - 6

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${random}.png`;

  let currentScoreEl = document.getElementById(`current--${activePlayer}`);
  if (random === 1) {
    currentScoreEl.textContent = 0;

    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } else {
    currentScore += random;

    currentScoreEl.textContent = currentScore;
  }
});

resetGame();
