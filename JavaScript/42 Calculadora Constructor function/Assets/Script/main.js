// Ex: Converta a calculadora criada com factory function para uma contructor function
function Calculadora() {
        this.display = document.querySelector('.display');
        
        //Metodos
        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) this.realizaConta();
            });
        };

        
        this.cliqueBotoes = () => {
            document.addEventListener('click', event => {
                const el = event.target;
                if (el.classList.contains('btn-num')) this.addNumDisplay(el);
                if(el.classList.contains('btn-clear')) this.clear();
                if(el.classList.contains('btn-del')) this.del();
                if(el.classList.contains('btn-eq')) this.realizaConta();
            }
            )};
            
            this.addNumDisplay = (el) => {
                this.display.value += el.innerText;
                this.display.focus();
            };
            
            this.clear = () => this.display.value = '';
            this.del = () => this.display.value = this.display.value.slice(0, -1);
            
            this.realizaConta = () => {
                try {
                    const conta = eval(this.display.value);
                
                    if(!conta) {
                        alert('conta invalida');
                        return;
                    }
                
                    this.display.value = conta;
                    } catch(e) {
                    alert('conta invalida');
                    return;
                };
            };
        };

const calculadora = new Calculadora();
calculadora.inicia();


