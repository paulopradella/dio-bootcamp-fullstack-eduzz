let lines = gets().split('\n')

let line = lines.shift().split(" ");
let A = 6.0;
let B = 4.0;
let C = 2.0;
let maior;
let soma;
let triangulo;

if (A > B && A > C) maior = A;
else if (B > C) maior = B;
else maior = C;

if (maior == A) soma = B + C;
else if (maior == B) soma = A + C;
else soma = B + A;

if (soma > maior) triangulo = true;
else triangulo = false;

if (triangulo) {

    perimetro = A + B + C
    console.log('Perimetro = ' + perimetro.toFixed(1));

} else {
    area = (((A + B) * C) / 2) + .0
    console.log('Area = ' + area.toFixed(1));

}