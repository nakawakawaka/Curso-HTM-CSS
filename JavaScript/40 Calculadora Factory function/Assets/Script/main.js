function criaCalculadora() {
    
    return {
        //Atributos - sao variaveis criadas dentro do objeto
        display: document.querySelector('.display'),
                
        
        //Metodos
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta invalida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        cliqueBotoes() {
            //this é quem esta chamando a funcao entao até esta linha this é calcu;adora
            document.addEventListener('click', function(e) {
                // Se utilizarmos uma arrow function o this nao ira mudar a refenrecia como ocorreu agora pq as arrow function sempre matem o this princial da funcao porem se caso fosse preciso a referencia de document nao seria possivel acessala
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // aqui this perde a referencia da calculadora porque quem executa afuncao é o document.addEventListener
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this)); // bind(this) - pede para a funcao nao utilizar a propria referencia no caso document e pede para utilizar a referencia que estava sendo utilizada fora da desta funcao
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();


