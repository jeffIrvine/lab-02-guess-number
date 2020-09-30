// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

// compareNumbers result: 0
test('take in a guess and correct answer and if theyre the same return 0 ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5;
    const correctAnswer = 5;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctAnswer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// compareNumbers result: -1
test('take in a guess and correct answer and if guess is lower than correctNum return -1 ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5;
    const correctAnswer = 6;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctAnswer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// compareNumbers result: 1
test('take in a guess and correct answer and if guess is higher than correctNum return 1 ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5;
    const correctAnswer = 4;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctAnswer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
