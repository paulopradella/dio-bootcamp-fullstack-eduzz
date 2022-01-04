//Exemplo simples
function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5));

//Para funcionar com város argumentos
//antes

function sum2(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum2(5, 5, 5, 2, 3));

//Depois com o Rest operator

function sum3(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum3(5, 5, 5, 2, 3));

//Usando o rest para pega argumentos restantes

function sum4(a, b, ...rest) {
    console.log(a, b, rest);
}
console.log(sum4(5, 5, 5, 2, 3));

// Spread operator
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum5 = (...rest) => {
    return multiply(...rest);
}

console.log(sum5(5, 5, 5, 2, 3));

//Spread com string:
const str = 'dio'

function logArgs(...Args) {
    console.log(Args);
}
logArgs(...str)

//Spread com arrays:
const arr = [1, 2, 3, 4]

function logArgs(...Args) {
    console.log(Args);
}
logArgs(...arr)

//Spread construindo arrays:
const arr2 = [...arr, 5, 6, 7];
const arr3 = [...arr2, ...arr2, 8, 9, 0];

console.log(arr2);
console.log(arr3);

//Spread com Objetos literais, só podem serusados para construir novos objetos:
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);