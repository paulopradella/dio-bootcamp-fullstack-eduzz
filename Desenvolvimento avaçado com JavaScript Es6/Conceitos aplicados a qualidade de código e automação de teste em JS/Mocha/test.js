//Mocha o temp máximo é e 2000ms, não é recomendado o uso de arro function
// const assert = require('assert');
// const Math = require('./math');

// describe('Marh class', function() {
//     it('Sum two numbers', function() {
//         const math = new Math();

//         try {
//             assert.equal(math.sum(5, 5), 10);
//         } catch (err) {
//             console.log(err);
//         }

//Quando o código for assincrono
// const assert = require('assert');
// const Math = require('./math');

// describe('Marh class', function() {
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000); //esse cmando possibilita ter um tempo maior que 2000ms no timeout do teste

//         math.sum(5, 5, (value) => {
//             assert.equal(value, 10)
//             done();
//         })
//     });
//     // permite escrever tetes para funções q ainda não existem
//     // para executar só um dos tests basta após o it colocar o .only
//     // para executar só um dos tests basta após o it colocar o .skip (ele ficara como pendente)
//     it('Multiply two numbers');
// });

// //usando chai
// const assert = require('assert');
// const Math = require('./math');
// const expect = require('chai').expect;

// describe('Marh class', function() {
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000); //esse cmando possibilita ter um tempo maior que 2000ms no timeout do teste

//         math.sum(5, 5, (value) => {
//             expect(value).to.equal(10);
//             done();
//         })
//     });
// });

//usando Sinon
const assert = require('assert');
const Math = require('./math');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Marh class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000); //esse comando possibilita ter um tempo maior que 2000ms no timeout do teste

        math.sum(5, 5, (value) => {
            expect(value).to.equal(10);
            done();
        });
    });
    it('Multiply two numbers', function() {
        const math = new Math();

        math.multiply(5, 5, (value) => {
            expect(value).to.equal(25);

        });
    });
    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
    });
});