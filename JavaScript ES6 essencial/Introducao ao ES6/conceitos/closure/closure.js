function init() {
    const exemplo = 'Essa váriavel';

    return function() {
        console.log(`1 - O valor da váriavel exemplo é: ${exemplo}.`);

        return function() {
            console.log(`1 - O valor da váriavel exemplo é: ${exemplo}.`);

            return function() {
                console.log(`1 - O valor da váriavel exemplo é: ${exemplo}.`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

init()()()(); //não é usado na vida real, mas existe