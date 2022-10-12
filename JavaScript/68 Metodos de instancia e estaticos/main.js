function teste() {
  // o this desta funcao referencia o objeto global o js
  //console.log(this);
  console.log('Este é meu teste');
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Metodo de instancia
  aumentarVolume() {
    this.volume += 2;
  }
  
  diminuirVolume() {
    this.volume -= 2; 
  }

  // Metodo estatico
  static trocaPilha() {
    console.log('Ok, vou trocar')
  }

  static soma(x, y) {
    // o this dentro do metodo estatico referencia a propria classe
    console.log(this);
    return x + y;
  }
}

// cada instancia tem os seus proprios dados entao caso aumente o volume de um controle neste caso se existice outro objeto de controle nao seira alterado
const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

// O metedo estatico é referente a classe e tudo que for referente a instancia nao pode ser acessado Ex.: os metodos de aumentar e diminuir volume
ControleRemoto.trocaPilha();
// ControleRemoto.aumentarVolume(); -> TypeError: ControleRemoto.aumentarVolume is not a function

console.log(ControleRemoto.soma(2, 10));
