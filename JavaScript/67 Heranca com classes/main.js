class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' ja ligado');
      return;
    }
    this.ligado = true;
  }

  desligado() {
    if(!this.ligado) {
      console.log(this.nome + 'ja desligado');
      return;
    }
    this.ligado = false;
  }
}

// extends herda o contrutor 
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // Chamar o contrutor da classe pai

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('voce alterou o metodo ligar')
  }

  falaOi() {
    console.log('oi')
  }
}

const s1 = new Smartphone('iPhone', 'preto', 'XS Max');
s1.ligar();
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.falaOi();
console.log(t1)

