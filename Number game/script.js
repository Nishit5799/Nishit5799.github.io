'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!..';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let randNumb = Math.trunc(Math.random() * 10) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess === 0) displayMessage('No number inserted');
  else if (guess > randNumb) {
    if (score > 1) {
      displayMessage('The number is high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== randNumb)
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randNumb ? 'Number is too high' : 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  else if (guess === randNumb) {
    document.querySelector('.message').textContent =
      'You guessed the right number';
    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = randNumb;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  randNumb = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.number').value = randNumb;
  document.querySelector('.number').textContent = '?';
});
