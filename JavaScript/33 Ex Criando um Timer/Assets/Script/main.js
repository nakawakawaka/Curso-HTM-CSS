const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function criaSegundos(segundos) {
    let data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer =  setInterval(function() {
        segundos++
        relogio.innerHTML = criaSegundos(segundos)
    }, 1000);
    return
}

/*
podemos criar apenas um addEventListener e colocar um target 
o terget neste caso indica todos os elementos que forem clicados
utilizando um console.log(e) no parametro ele exibira todos os elementos que foram selecionados com o evento de click
colocando o e.target em uma constante el que significa elementos
na condicao do if procuramos por um elemento que contem a classe que esta dentro dos ()
 */
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (el.classList.contains('zerar')) {
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        clearInterval(timer);
        relogio.classList.remove('pausado');
    }
});

// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(event) {
//     relogio.classList.add('pausado');
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function(event) {
//     segundos = 0;
//     relogio.innerHTML = '00:00:00';
// });

