//Contrução de Array
console.log("Contruindo arrays");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
const arr2 = new Array(1, 2, 3);
console.log(arr2);
const arr3 = Array.of(1, 2, 3);
console.log(arr3);
const arr4 = Array(3); //cria um com 3 posições vazias
console.log(arr4);
const arr5 = Array(3, 2);
console.log(arr5);
//array.from (Contrução de Array)
// const divs = document.querySelectorAll('div'); // isso vai ser um node list
// const arr6 = Array.from(divs);
// console.log(arr6);

//Inserir e remover elementos
//push
console.log("\nPush");
const arrLenght1 = arr.push(4);
console.log(arrLenght1);
console.log(arr);

//pop
console.log("\nPop");
const removeIem = arr.pop();
console.log(removeIem);
console.log(arr);

//Unshift
console.log("\nUshift");
const arrLenght2 = arr.unshift(4);
console.log(arrLenght2);
console.log(arr);

//Shift
const arrLenght3 = arr.shift(3);
console.log("\nShift");
console.log(arrLenght3);
console.log(arr);

//concat
console.log("\nConcat");
const concatenado = arr.concat(arr2);
console.log(concatenado);

//slice
console.log("\nSlice");
const fatiado = arr.slice(0, 2);
console.log(fatiado);
console.log(arr);

//slice
console.log("\nSplice");
const spli = arr.splice(2);
console.log(spli);
console.log(arr);

//Iterar elmentos
//for Each
console.log('forEach');
arr.forEach((value, index) => {
    console.log(index, ':', value);
})

//map
console.log("\nMap");
arr.map(value => value * 2);
console.log(arr);

//flat
console.log('\nFlat');
arr.flat();
console.log(arr);

//flatmap
console.log('\nFlatMap');
arr.flatMap(value => [value * 2])
console.log(arr);

//Keys
console.log('\nKeys');
const arrIterator = arr.keys();
arrIterator.next();
console.log(arr);

//Values
console.log('\nValues');
const arr2Iterator = arr.values();
arr2Iterator.next();
console.log(arr);

//Entries
console.log('\nEntries');
const arr3Iterator = arr.entries();
arr3Iterator.next();
console.log(arr);

//Buscar elementos
//find
console.log('\nFind');
const firstGreaterThanTwo = arr.find(value => value > 1);
console.log(firstGreaterThanTwo);

//findindex
console.log('\nFind');
const firstGreaterThanTwo2 = arr.findIndex(value => value > 2);
console.log(firstGreaterThanTwo2);

//filter
console.log('\nFilter');
const allValuesGreaterThanTwo = arr.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);

//indexoff
console.log('\nIndexOf');
const firstIndexOfItem = arr.indexOf(3);
console.log(firstIndexOfItem);

//lastindexoff
console.log('\nLastIndexOf');
const lastIndexOfItem2 = arr.lastIndexOf(3);
console.log(lastIndexOfItem2);

//Includes
console.log('\nIncludes');
const hasItem = arr.includes(3);
console.log(hasItem);

//some
console.log('\nSome');
const haasSomeEvemNumber = arr.some(value => value % 2 === 0);
console.log(haasSomeEvemNumber);

//Every
console.log('\nEvery');
const allEvenNumbers = arr.every(value => value % 2 === 0);
console.log(allEvenNumbers);

//Ordenar elementos
//sort
console.log('\nsort');
const sort = arr.sort();
console.log(sort);

//Reverse
console.log('\nReverse');
const reverse = arr.reverse();
console.log(sort);

//Tansformar array emoutro tipo de dado
//Join
console.log('\nJoin');
const join = arr.join('-');
console.log(join);

//Reduce
console.log('\nReduce');
const reduce = arr.reduce((total, value) => total += value, 0);
console.log(reduce);