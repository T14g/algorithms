/**
 * * The Stack
 *  -Call stack exemple
 */

function greet(name) {
    console.log(`Hello ${name}!`);

    greet2(name);
    bye();
}

function greet2(name) {
    console.log(`How are you ${name}?`);
}

function bye() {
    console.log("Bye!");
}

greet('Tiago');