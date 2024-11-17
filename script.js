'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check ').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('No number');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'To Low!');

      score--;
      document.querySelector('.score').textContent = score;
      //when guess is too high
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
