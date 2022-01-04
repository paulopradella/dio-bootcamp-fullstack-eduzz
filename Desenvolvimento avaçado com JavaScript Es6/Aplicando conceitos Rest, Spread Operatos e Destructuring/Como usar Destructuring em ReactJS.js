// antes
var arr = ['aplle', 'banana', 'orange', ['tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
console.log(arr, apple, banana, orange, tomato);

//depois
var [apple2, banana2, orange2, [tomato2]] = ['aplle', 'banana', 'orange', ['tomato']];
console.log(apple2, banana2, orange2, tomato2);