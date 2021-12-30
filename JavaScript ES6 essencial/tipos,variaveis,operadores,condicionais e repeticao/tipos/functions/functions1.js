function fn() { //modelo antigo de função
    return 'Code here';
}

const arroFn = () => 'Code Here'; //return implicito
const arrowFn = () => {
    // mais de uma expreção
    return 'Code here'; // se for colocar mais coisas  return deve ser expllicito
}

//Funcões também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

//Receber e retoornar funções
// const controlFnExec => fnParam => allowed => {
//     if (allowed) {
//         fnParam();
//     }
// }

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Executará a função fn
handleFnExecution(); //Não executa;a a função fn

//controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();

        }
    }
}