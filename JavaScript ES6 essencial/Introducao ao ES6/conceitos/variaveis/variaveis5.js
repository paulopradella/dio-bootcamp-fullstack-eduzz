const name = 'Bode';

// Não podemos alterar op valor
// name = 'Bode';

const user = {
    name: 'Bode'
};

// Mas se for um objeto, podemos trocar suas prpriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" paraoutro lugar
//user = {
//   name: 'Bode'
//};

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('João');

// Podemos removr algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James'
console.log('\nArray após as alterações: ', persons);