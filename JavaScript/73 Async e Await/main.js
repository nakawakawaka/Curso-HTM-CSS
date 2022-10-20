function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('cai no erro');
        return;
      }  

      resolve(msg.toUpperCase());
      return;
    }, tempo);
  });
}

// colocando a palavra async antes de uma funcao habilitamos o await
async function executa() {
  // para utilizar o await dever colocar ela em uma variavel
  // neste caso nao temos mais o catch para capturar o erro por isso podemos utilizar try/catch
  try{
    const fase1 = esperaAi('fase 1', 1000);
    console.log(fase1);

    setTimeout(function() {
      console.log('Essa promisse estava pendente', fase1);
    },1100)
  
    const fase2 = await esperaAi('fase 2', rand());
    console.log(fase2);
  
    const fase3 = await esperaAi('fase 3', rand());
    console.log(fase3);
  
    console.log('Terminamos na fase: ',fase3);
  } catch(e) {
    console.log(e);
  }
}
executa();

// estatos que uma primise tem
// pending -> pendente
// fulfilled -> resolvida
// rejected -> rejeitada
