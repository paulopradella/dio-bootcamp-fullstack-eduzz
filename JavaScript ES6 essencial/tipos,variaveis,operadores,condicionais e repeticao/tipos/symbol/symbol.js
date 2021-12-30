const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('Symbol1 é igua a Symbol2: ', symbol1 === symbol2);

//Previnir conilto entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cabrini da Silva'
}

console.log(user);

//Symbol criam propriedades ue são enumerabes
for (const key in user) {
    if (user.hasOwnProperty(user)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT'),
};