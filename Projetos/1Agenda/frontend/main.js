import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import ValidaContato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

const contato = new ValidaContato('.form-register');


login.init();
cadastro.init();

contato.init(); 

// import './assets/css/style.css';

