//Callback
//antes
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}
//executar sequencialmente
function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('')
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) { //handle error
                    }
                });
            } catch (err) { //handle error
            }
        });
    } catch (err) { //handle error
    }
}

doAll();

//mesmo código mas agora usando Promises
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        // throw new Error('Something went wrong')
        setTimeout(function() {
            resolve('First data');
        }, 1000);
    });
const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Second data');
        }, 1000);
    });
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    // .catch(error => console.log('ops',error));
    //Status possíveis de uma promise:
    //Pending = está em execução
    //Fullfilled = terminou de ser executada
    //Reject = foi reijeitada porque ocorreu um erro

//executar ambas ao mesmo tempo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(error => console.log('ops', error));

//A que for resolvida será executada
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data.split(''));
}).catch(error => console.log('ops', error));