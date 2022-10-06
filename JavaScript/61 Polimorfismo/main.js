// Superclass
// Polimorfismo é fazer que um metodo se comporte de forma diferente em classe filhas de um mesmo pai ou seja o metodo se comporta de forma diferendo mesmo sendo o mesmo metodo
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(this.saldo < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo,toFixed(2)}`)
    return;
  }  
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function() {
  console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
    return;
  }  
  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

// console.log();

// const cp = new ContaCorrente(12, 33, 0);
// cc.depositar(10);
// cc.sacar(110);
// cc.sacar(1);