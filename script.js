'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="Correct Number";

document.querySelector('.number').textContent=30;

document.querySelector('.guess').value=10;
console.log(document.querySelector('.guess').value) */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage=function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const quess = Number(document.querySelector('.guess').value);
  console.log(quess, typeof quess);

  // when there is no input
  if (!quess) {
    displayMessage('⛔No Number!');
  }
  // when player wins
  else if (quess == secretNumber) {
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#65af4e';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  // Refractoring
  else if (quess != secretNumber) {
    if (score > 1) {
      displayMessage(quess < secretNumber ? 'Too Low ⬇' : 'Too High ⬆');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☀ You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor =
    'rgba(83, 80, 80, 0.719)';
});
