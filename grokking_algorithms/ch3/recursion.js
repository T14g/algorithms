/**
 * * Recursive function have two parts:
 *  -The Base case = when the function doesnt call itself anymore
 *  -The Recursive case
 */

function countdown(i) {
    console.log(i);

    //Base case
    if (i <= 0) {
        return -1;
    } else {
        countdown(i - 1);
    }
}

let test = 100;
countdown(test);