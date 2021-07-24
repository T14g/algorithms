/**
 * I call the power of hash tables lol
 * Saving names as hash so you can instantly check it!
 */

let hashTable = {};

function checkVoter(name) {
    if (hashTable[name]) {
        console.log("You already voted sir!");
    } else {
        hashTable[name] = true;
        console.log("Thanks for voting sir!");
    }
}

checkVoter('fulano');
checkVoter('ciclano');
checkVoter('fulano');