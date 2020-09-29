# lab-02-guess-number
(MVP)

STATE: - Number of guesses

VIEW DERIVED FROM STATE: - Rick & Morty health - Picture of Rick & Morty - Guess counter

Key variables: Numbers to guess from 1-20, guess wrong + clue high/low, guess right win + win image/message, guess wrong used all guesses + lost/death image/message.

HTML ELEMENTS WE NEED: 
- Indepenent Content (don't change based on state): instructions, etc 
- Input - Take in the users guess
- Button - Why? On click, use one guess (IN STATE) and update the DOM accordingly 
- Image - Why? Show if guess was wrong or right 
- Span/Div/Section (guesses) - Why? Display number of guesses 
- Reset button - Why? On click, reset the game (new universe)

On button click: 1) Increment the ounces in state - Update the DOM as state changes 1) Check if the current ounces has reached a certain threshold. If so: 1) Image changes 1) Plant health message changes 1) If it's greater than 30 ounces, reset the game 1) Set the state of ounces back to 0 1) Reset the DOM elements to their initial state



Create an app that allows the user four guesses to find a number between 1 and 20 inclusive (including "1" and "20"). After each incorrect guess, tell them whether their guess was "too high" or "too low". If they guess correct, or use up all their guesses, disable further input and display an end lose or win message.