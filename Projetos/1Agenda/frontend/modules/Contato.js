import validator from 'validator';

export default class ValidaContato {
    constructor(formClass) {
      this.form = document.querySelector(formClass); 
    }
  
    init() {
      this.events();
    }
  
    events() {
      if(!this.form) return;
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.validate(e);
      });
    }
  
    validate(e) {
      const el = e.target;
      const nomeInput = el.querySelector('input[name="nome"]');
      const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
      const emailInput = el.querySelector('input[name="email"]');
      const telInput = el.querySelector('input[name="telefone"]');
      let error = false;
  
      if(!nomeInput.value) {
        alert('O campo NOME precisa ser preenchido');
        error = true;
      }
  
      if(!sobrenomeInput.value) {
        alert('O campo SOBRENOME precisa ser preenchido');
        error = true;
      }
  
      if(!telInput.value && !emailInput.value) {
        alert('O campo E-mail ou Telefone precisam ser preenchidos');
        error = true;
      } else if (emailInput.value) {
        if(!validator.isEmail(emailInput.value)) {
          alert('E-mail inválido');
          error = true;
        }
      }

      if(!error) el.submit();
    }
  }