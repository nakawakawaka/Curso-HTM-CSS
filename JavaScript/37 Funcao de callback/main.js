// cria uma tempo aleatorio dentre 1000 e 3000 milesimos de segundo
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// funcao de callback sao coisas que voce chama quando algo termina de ocorrer
function f1(callback) {
    setTimeout(function() { // isso tambem é uma callback
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() { // setTimeout simula algo que demoraria na web
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
// Callback hell - nao é uma boa pratica
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('ola mundo');
//         });
//     });
// });

f1(f1Callbalck);

function f1Callbalck () {
    f2(f2Callbalck);
}

function f2Callbalck() {
    f3(f3Callbalck);
}

function f3Callbalck () {
    console.log('ola mundo')
}

