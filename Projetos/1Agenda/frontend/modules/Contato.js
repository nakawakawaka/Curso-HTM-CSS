import validator from 'validator';

export default class ValidaContato {
    constructor(formClass) {
      this.form = document.querySelector(formClass); 
    }
  
    init() {
        alert('funciona porra')
      this.events();
    }
  
    events() {
      if(!this.form) return;
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        e.validate();
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
        alert('O campo nome precisa ser preenchido');
        error = true;
      }
  
      if(!sobrenomeInput.value) {
        alert('O campo nome precisa ser preenchido');
        error = true;
      }
  
      if(!validator.isEmail(emailInput.value)) {
        alert('E-mail é inválido');
        error = true;
      }
  
      if(!telInput.value || !emailInput.value) {
        alert('O campo nome precisa ser preenchido');
        error = true;
      }
  
    }
  }