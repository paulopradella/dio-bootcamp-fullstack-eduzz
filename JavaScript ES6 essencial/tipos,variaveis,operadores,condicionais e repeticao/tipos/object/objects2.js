const user = {
    name: 'Guilherme',
    lastName: 'Caabrini da Silva'
}

//Recupera as chaves do objeto
console.log('Propriedades do objetos user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nVaalores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores', Object.entries(user));

//Margear propriedades de objetos
Object.assign(user, { fullName: 'Guilherme Cabrini da Silva' });

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um noo objeto mergendo dois ou maais objetos', Object.assign({}, user, { age: 26 }));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' }
Object.freeze(newObj);

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariavel newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades exitentes em um objeto
const person = { name: 'Guilherme' };
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name
person.age = 26;
console.log('\nVáriavel person após as alterações', person);