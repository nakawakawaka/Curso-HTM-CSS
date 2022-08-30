//date é uma funcao construtora
//Uma funcao construtora comeca com a primeira letra maiuscula

/*
const data = new Date(); // o marco Zero é 01/01/1970 Timestamp unix ou epoca unix mas pode variar de acordo com o fuso horario

//Date(2022, 3, 20, 15, 14, 400) - Ano Mes Dia Hora Minutos Segundo Milesimo de segundo
//O mes no Js comeca no Zero por isso 3 rempresenta Abril

//Podemos enviar ta em forma de string
const dateString = new Date("2022-08-30 12:05:55"); //no lugar do espaco podemos colocar T 
console.log(data.toString());

console.log('dia', data.getDate());
console.log('mes', data.getMonth() +1); //mes comeca no Zero
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('diaSem', data.getDay()); //domingo = 0 Sabado = 6
*/

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`
}

function formatData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth()+1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil)