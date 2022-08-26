/*
 If pode ser usado sozinho
 Sempre que utilizo else, preciso de um if antes
 Posso ter varios else if na checagem
 so posso ter um else na checagem 
*/
const queroDormir = false

if (queroDormir === true) {
    console.log('vamos dormir')
}

const hora = 18;
//na condicao <= 11 ele valia ate 11:59
if (hora >= 0 && hora <= 11 ) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite');
} else {
    console.log('oi')
}

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('sim')
} else {
    console.log('nao')
}