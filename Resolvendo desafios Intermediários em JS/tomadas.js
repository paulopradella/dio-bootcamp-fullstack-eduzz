let lines = gets().split("\n");


let line = lines.shift().split(' ');

let T1 = parseInt(line[0]);
let T2 = parseInt(line[1]);
let T3 = parseInt(line[2]);
let T4 = parseInt(line[3]);


let maximo = ((T1 + T2 + T3 + T4) - 3);

print(maximo);