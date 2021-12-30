const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [{
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennife',
        age: 18,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Itens', persons.length);

//Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome:  ${person.name} index: ${index}`, arr);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNovalista apenas com os homens: ', mens);

//Retornar um novo
const personsWhitCourse = persons.map(person => {
    person.course = 'Introdução ao JS';
    return person;
});

console.log('\nPessoas com a adição do course: ', personsWhitCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('Soma de idade das pessoas: ', totalAge);

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0)

console.log('\nSoa de idades das pessoas que possuem idade par: ', totalEvenAges);