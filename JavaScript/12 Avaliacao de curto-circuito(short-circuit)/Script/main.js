//operador && (AND)
function falaOi () {
    return 'oi';
}

let vaiExecutar; //undefined avalia em false

//o Js para de avaliar quando ele encontra o valor que esta procurando com o operador && as duas condicoes tem que ser true para ser executado por isso ele nao avalia mais o resto
console.log(vaiExecutar && falaOi()); 

function falaOi2 () {
    return 'oi';
}

let vaiExecutar2 = 'naoki';

console.log(vaiExecutar2 && falaOi2());

//operador || (OR)
const a = 0;
const b = null;
const c = 'false'; //este valor é uma string por isso é avaliado em verdadeiro
const d = false;
const e = NaN;

//se todos os valores fossem false ele retornari o ultimo valor avaliado no caso o NaN
console.log(a || b || c || d || e);