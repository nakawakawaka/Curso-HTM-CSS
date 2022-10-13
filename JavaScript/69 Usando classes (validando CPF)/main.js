class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
    this.novoCpf = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;
    for(let stringNumerica of cpfSemDigitos) {
      //console.log(stringNumerica, reverso);
      total += reverso * Number(stringNumerica);
      reverso--;
    }
    
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.eSequencia()) return false;
    this.geraNovoCpf();
    console.log(this.novoCpf)

    return this.novoCpf === this.cpfLimpo;
  }

}

let validacpf = new ValidaCpf('070.987.720-03');
let validacpf2 = new ValidaCpf('705.484.450-52');
//validacpf = new ValidaCpf('999.999.99-99')
if(validacpf.valida()) {
  console.log('CPF valido');
} else {
  console.log('CPF invalido');
};
console.log();
if(validacpf2.valida()) {
  console.log('CPF valido');
} else {
  console.log('CPF invalido');
};