// Antes
function multiply(a, b) {
    b = b || 1;

    return a * b
}

console.log(multiply(5));

//ES6
function multiply2(a, b = 1) {
    return a * b;
}

console.log(multiply2(5));

//Referenciando outro parâmentro
function multiply3(a, b = a) {
    return a * b;
}

console.log(multiply3(5));

// lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiply4(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply4(5));