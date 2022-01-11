let lines = gets().split("\n");

let n = parseInt(lines.shift());
const text = ['life is not a problem to be solved']
var certo = ''

for (let i = 0; i < n; i++) {

    if (i >= 0) {

        certo = certo + text[0][i]
    }
}

print(certo.toUpperCase())