// Ex: Converta a calculadora criada com factory function para uma contructor function
function CriaCalculadora() {
        const display = document.querySelector('.display');
        
        //Metodos
        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };

        this.realizaConta = () => {
            let conta = display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta invalida');
                    return;
                }

                display.value = conta;
            } catch(e) {
                alert('conta invalida');
                return;
            }
        };

        this.clearDisplay = () => {
            display.value = '';
        };

        this.apagaUm = () => {
            display.value = display.value.slice(0, -1);
        };
        
        this.cliqueBotoes = () => {
            
            document.addEventListener('click', function(e) {
                
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
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

            }.bind(this));
        };

        this.btnParaDisplay = (valor) => {
            display.value += valor;
        };

}

const calculadora = new CriaCalculadora();
calculadora.inicia();


