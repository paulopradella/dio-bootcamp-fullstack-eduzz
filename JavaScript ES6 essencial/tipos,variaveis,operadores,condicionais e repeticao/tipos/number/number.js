const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString()
console.log('Número tranformado em string: ', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecmals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecmals);

//Transforma um tring em float
console.log('\nStrig parseada para float: ', parseFloat('13.20'));

//Transforma um string em int
console.log('\nString parseafda para int:', parseInt('13.20'));