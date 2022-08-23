//Pode-se colocar em um array qualquer tipo de dados porem misturar varios tiopos de dados em uma msm array nao é uma boa protica de programação

//o indice dos arrays começam do 0, 1 ...
let nomes = ['bruno', 'thamiris', 'yuuki'];
console.log(nomes);

console.log(nomes instanceof Array);
console.log(typeof nomes); //Arrays são considerados objeto

console.log(nomes.slice(1, 3)); //podemos fatirar uma array da mesma forma que ums string

//delete nomes [1]; //remevo o elemento do array porem mantem o indice do elemento removido se caso este indece for chamado sera retornado undefined

//nomes.shift(); //funcao para remover o primeiro elemento da array porem o indice de todos os elementos iram mudar

//nomes.pop(); //funcao para remorver o ultimo elemento do array
//const removido = nomes.pop(); //desta maneira o ultimo elemento removido é salvo em uma variavel

//nomes.unshift('nakawaka'); //esta funcao adiciona o elemento no comeco da array porem desta forma todos eles elementos iram mudar de indice

//nomes.push('kimura'); //o javaScript tem uma funcao para adicionar o elemento ao final da array esta é a melhor forma para essa tarefa
//nomes[nomes.length] = 'nakamura' //desta forma adiciona o elemento ao final do array

//nomes[3] = 'naoki'; //adiciona um elemento porem é nescesario saber o tamanho do array e essa nao é o melhor jeito para isso
//nomes[1] = 'yumi'; //substituindo um elemento
