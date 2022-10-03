// 705.484.450-52 070.987.720-03
/*
Multiplicamos os 9 digitos do CPF na sequencia regreciva de 10 ate 2 e somamos o resultado de todas as multiplicacoes
7x 0x 5x 4x 8x 4x 4x 5x 0x 
10 9  8  7  5  6  4  3  2  
70 0  40 28 48 20 16 15 0 = 237

11- (237 % 11) = 5 (Primeiro digito)
Se o resultado desta conta for maior que 9 o digito que sera considerado Zero

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0  45 32 56 24 20 20 0 = 274

11- (274 % 11) = 2 (Segundo digto)
*/

// Minha resolucao
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
let corte = cpfArray.slice(0, -2);
function primeiroDigito () {
    let x = 10;
    let multiplicado = [];
    for (let i of corte) {
        multiplicado.push(i * x); 
        x--;     
    }
    const somaArrMulti = multiplicado.reduce((ac, val) => ac + Number(val), 0);
    if (11 - (somaArrMulti % 11) < 9) {
        return 11 - (somaArrMulti % 11);
    } else {
        return 0
    }
}

function segundoDigito () {
    let x = 11;
    let multiplicado = [];
    for (let i of corte) {
        multiplicado.push(i * x); 
        x--;     
    }
    const somaArrMulti = multiplicado.reduce((ac, val) => ac + Number(val), 0);
    
    if (11 - (somaArrMulti % 11) < 9) {
        return 11 - (somaArrMulti % 11);
    } else {
        return 0
    }
}

corte.push(primeiroDigito (), segundoDigito ());
const cpfTeste = corte.toString().replaceAll(',', '');

if (cpfLimpo !== cpfTeste) {
    console.log('CPF invalido');
} else {
    console.log('CPF Valido!!')
}






















