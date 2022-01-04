//Symbols

const uniqueId = Symbol();
console.log(uniqueId);

//Passando um valor, só terá uso para o debug
const uniqueId2 = Symbol('Hello');
console.log(uniqueId2);

//comparando os dois
console.log(uniqueId === uniqueId2);

// privada

const obj = {
    [uniqueId2]: 'Hello'
}

console.log(obj);

//para acessar as propriedades
// Object.getOwnPropertySymols(obj)

//Well Known symbols
// Symbol.iterator torna iterável
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Contruindo a função interadora em um objeto

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};
const it = obj[Symbol.iterator]()

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//usando o for of

for (let value of obj) {
    console.log(value);
}

//usando spread

const arr2 = [...obj];
console.log(arr2);