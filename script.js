'use strict';
/*
///Selecting and manipulating strings///
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
document.querySelector('.number').textContent= 19;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 27;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number is entered';
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== number) {
        if (score > 1) {
        document.querySelector('.message').textContent = guess>number?'high':'low';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    } }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor='#222'

})