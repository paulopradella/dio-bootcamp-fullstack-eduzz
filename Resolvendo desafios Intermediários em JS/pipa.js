let lines = gets().split("\n");

let N = parseInt(lines.shift());
let resposta = ((N - 3) * N) / 2;

print(resposta);