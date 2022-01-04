//Generators
function hello() {
    console.log('Hello');
    console.log('from');
    console.log('function');
}
hello();

//Agora como fazer ela pausar entre cada interação
function* hello2() {
    console.log('Hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('function');
}
const it = hello2();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//É possível passar valores de fora 
function* hello3() {
    console.log('Hello');
    yield 1;
    console.log('from');
    const value = yield 2;
    console.log(value);
}
const it2 = hello3();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next('Outside!'));

//Exemplo com base no da aula anterior
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}