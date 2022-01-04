// Função antiga:
var sumold = function(a, b) {
    return a + b;
};

console.log(sumold(5, 5));

// 

//Função com Arrow function

var sum = (a, b) => a + b;

console.log(sum(5, 5));

// Retorna : 10

//Função com Arrow function só com  um argumento
var sumsemparenteses = a => a + 5;

//Função com Arrow function com Destructuring

var sum = ({ a }) => a;

//Função com Arrow function com hash operator

var sum = (...a) => a;

//Declaração de objetos literais
var obj = {
    test: '123'
};

//Declaração de objetos literais com return implícito
var createObj = () => ({ test: 123 });

console.log(createObj());

//Outra forma de construir objetos é com função construtora
function Car() {
    this.foo = 'bar'
}

console.log(new Car());

//Sem Arrow function
var obj = {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(
            function() {
                this.log('after 1000ms');
            }.bind(this), 1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

//Com Arrow function

var obj = {
    showContext: function showContext() {
        this.log('teste');

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();