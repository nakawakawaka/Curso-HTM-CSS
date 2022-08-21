const nome = prompt('digite o seu nome completo:');

document.body.innerHTML += `O seu nome é: <strong>${nome}</strong></br>`;
document.body.innerHTML += `O seu nome tem <strong>${nome.length}</strong> letras</br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong> letras</br>`;
document.body.innerHTML += `Qual o primeiro índice da letra "N" no seu nome? <strong>${nome.indexOf('N')}</strong></br>`;
document.body.innerHTML += `Qual o último índice da letra "N" no seu nome? <strong>${nome.lastIndexOf('N')}</strong></br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)}</strong></br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong></br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong></br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></br>`;