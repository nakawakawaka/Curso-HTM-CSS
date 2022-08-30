/*
//minha resolucao
const texto = document.querySelector('#h1');
const date = new Date();
const diaSem = date.getDay();
const mesNum = date.getMonth();

function diaSemTexto (diaSem) {
    let texto;

    switch (diaSem) {
        case 0: texto = 'Domingo';
        return texto;
        case 1: texto = 'Segunda-Feira';
        return texto;
        case 2: texto = 'Terça-Feira';
        return texto;
        case 3: texto = 'Quarta-Feira';
        return texto;
        case 4: texto = 'Quinta-Feira';
        return texto;
        case 5: texto = 'Sexta-Feira';
        return texto;
        case 6: texto = 'Sabado';
        return texto;
    }
}

function mes (num) {
    let texto;
    
    switch (num) {
        case 0: texto = 'Janeiro';
        return texto;
        case 1: texto = 'Fevereiro';
        return texto;
        case 2: texto = 'Março';
        return texto;
        case 3: texto = 'Abril';
        return texto;
        case 4: texto = 'Maio';
        return texto;
        case 5: texto = 'Junho';
        return texto;
        case 6: texto = 'Julho';
        return texto;
        case 7: texto = 'Agosto';
        return texto;
        case 8: texto = 'Setembro';
        return texto;
        case 9: texto = 'Outubro';
        return texto;
        case 10: texto = 'Novembro';
        return texto;
        case 11: texto = 'Dezembro';
        return texto;
    }
}

texto.innerHTML = `${diaSemTexto(diaSem)}, ${zeroAEsquerda(date.getDate())} de ${mes(mesNum)} de ${date.getFullYear()}</br>`;
texto.innerHTML += `${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}:${zeroAEsquerda(date.getSeconds())}</br>`;

//Resolucao do professor
//solucao 1 mantendo os switchs
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function criaData (data) {
    const nomeDia = diaSemTexto(diaSem);
    const nomeMes = mes(mesNum);

    return `${nomeDia}, ${zeroAEsquerda(date.getDate())} de ${nomeMes} de ${date.getFullYear()} ` + `${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`;
}

texto.innerHTML = criaData(date);
*/

//solucao 2
/*
const texto = document.querySelector('#h1');
const date = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

texto.innerHTML = date.toLocaleDateString('pt-BR', opcoes);
*/
//solucao 3
const texto = document.querySelector('#h1');
const date = new Date();
const diaSem = date.getDay();
const mesNum = date.getMonth();

function diaSemTexto (diaSem) {
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']

   return diasSemana[diaSem];
}

function mes (num) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro' ,'Outubro', 'Novembro', 'Dezembro']
    
    return meses[num];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
function criaData (data) {
    const nomeDia = diaSemTexto(diaSem);
    const nomeMes = mes(mesNum);

    return `${nomeDia}, ${zeroAEsquerda(date.getDate())} de ${nomeMes} de ${date.getFullYear()} ` + `${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}`;
}

texto.innerHTML = criaData(date);
