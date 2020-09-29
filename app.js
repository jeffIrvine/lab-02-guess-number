import { compareNumbers } from '../utils.js';

// import functions and grab DOM elements
const guessButton = document.getElementById('guess-button');
const guessesLeft = document.getElementById('guesses-left');
const userInput = document.getElementById('user-input');
const image = document.getElementById('image');
const answer = document.getElementById('answer');

// console.log();
const guesses = 4;
const correctNum = Math.ceil(Math.random() * 20);
console.log(correctNum);
// console.log(correctAnswer);

guessButton.addEventListener('click', () => {
// USER INPUT === 
    const compareNumbersResult = compareNumbers(userInput, correctNum);
    const userNumber = Number(userInput.value);

    if (compareNumbers(userNumber, correctNum) === 0) {
        answer.textContent = 'You won!';
    }
        // if (compareNumbers === -1) {
        //     guesses--
        // }
        // if (compareNumbers === 1) {
        //     guess--
        // }
  



});

// initialize state

// set event listeners to update state and DOM