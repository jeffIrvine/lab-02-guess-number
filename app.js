import { compareNumbers } from '../utils.js';

// import functions and grab DOM elements
const guessButton = document.getElementById('guess-button');
const guessesLeft = document.getElementById('guesses-left');
const userInput = document.getElementById('user-input');
const image = document.getElementById('image');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset');
const winNum = document.getElementById('win-num');
const lossNum = document.getElementById('loss-num');

let guesses = 4;
let correctNum = Math.ceil(Math.random() * 20);
let totalWins = 0;
let totalLoss = 0;
console.log(correctNum, 'RandNum');


resetButton.addEventListener('click', reset);
guessButton.addEventListener('click', () => {
    guesses--;
    guessesLeft.textContent = guesses;
    
    const userNumber = Number(userInput.value);
    const compNumResult = compareNumbers(userNumber, correctNum);
    console.log(compNumResult, 'CompRes');
    console.log(userInput.value, 'input');

    if (compNumResult === 0) {
        totalWins++;
        guesses = 4;
        guessesLeft.textContent = guesses;
        correctNum = Math.ceil(Math.random() * 20);
        image.src = 'assets/rmSaved.png';
        answer.textContent = 'Great job, you saved Rick and Morty! Go again!';
        console.log(correctNum, 'winNum');
    }
    if (compNumResult === 1) {
        answer.textContent = 'Sorry that\'s too high!';
        image.src = 'assets/rmFlipOff.png';
    }
    if (compNumResult === -1) {
        answer.textContent = 'Sorry that is too low!';
        image.src = 'assets/rmFlipOff.png';
    }
    if (guesses === 0) {
        guessButton.disabled = true;
        answer.textContent = 'Sorry you lost... they already died.';
        image.src = 'assets/rmDeath.png';
        totalLoss++;
    }
    
    userInput.value = '';
    winNum.textContent = totalWins;
    lossNum.textContent = totalLoss;
});


function reset() {
    correctNum = Math.ceil(Math.random() * 20);
    guesses = 4;
    guessesLeft.textContent = guesses;
    userInput.value = '';
    answer.textContent = 'The game has reset!';
    guessButton.disabled = false;
    image.src = 'assets/portal.png';
    console.log(correctNum, 'ResetNum');
}


// initialize state

// set event listeners to update state and DOM