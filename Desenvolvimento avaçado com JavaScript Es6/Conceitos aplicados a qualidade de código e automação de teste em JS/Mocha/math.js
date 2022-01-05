// // dando erro
// class Math {
//     sum = function sum() {};
// }

// module.exports = Math;

// //Erro corrigido
// class Math {
//     sum = function sum(a, b) {
//         return a + b;
//     };
// }

// module.exports = Math;

// //Código refatorado
// class Math {
//     sum(a, b) {
//         return a + b;
//     };
// }

// module.exports = Math;

//Código assincrono
// class Math {
//     sum(a, b, callback) {
//         setTimeout(() => {
//             callback(a + b)
//         }, 5);
//     };
// }

// module.exports = Math;

//usando o Sinon
class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2500);
    }
    multiply(a, b) {
        return a * b;
    }
    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;