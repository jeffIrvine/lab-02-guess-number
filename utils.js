// export function randNum() {
//     return Math.ceil(Math.random() * 20);
// }

export function compareNumbers(guessNum, correctNum) {
    if (guessNum === correctNum) {
        return 0;
    } else if (guessNum < correctNum) {
        return 1;
    } else if (guessNum > correctNum) {
        return -1;
    }
}