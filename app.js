import { compareNumbers } from '../utils.js';

// import functions and grab DOM elements
const guessButton = document.getElementById('guess-button');
const guessesLeft = document.getElementById('guesses-left');
const userInput = document.getElementById('user-input');
const image = document.getElementById('image');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset');

// console.log();
let guesses = 4;
let correctNum = Math.ceil(Math.random() * 20);
let totalWins = 0;
console.log(correctNum);
// console.log(correctAnswer);



guessButton.addEventListener('click', () => {
    guesses--;
    guessesLeft.textContent = guesses;
    
    const userNumber = Number(userInput.value);
    const compNumResult = compareNumbers(userNumber, correctNum);
    console.log(compNumResult);

    if (compNumResult === 0) {
        answer.textContent = 'You won!';
    }
    if (compNumResult === 1) {
        answer.textContent = 'Sorry that\'s too high!';
    }
    if (compNumResult === -1) {
        answer.textContent = 'Sorry that is too low!';
    }
    if (guesses === 0) {
        guessButton.disabled = true;
        answer.textContent = 'Sorry you have no more tries!';
    }
});

resetButton.addEventListener('click', () => {
    correctNum = Math.ceil(Math.random() * 20);
    guesses = 4;
    answer.textContent = 'The game has reset!';
});


// initialize state

// set event listeners to update state and DOM