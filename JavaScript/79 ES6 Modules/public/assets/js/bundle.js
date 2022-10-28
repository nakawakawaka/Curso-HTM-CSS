/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa),
/* harmony export */   "default": () => (/* binding */ soma),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome2": () => (/* binding */ sobrenome)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var nome = 'naoki';
var sobrenome = 'nakamura';
var idade = 30;
// tudo que nao estiver dentro do objeto export ou com a palavra export antes nao sera exportado
var cpf = '111.111.111-11';

// defalt cria um padrao
function soma(x, y) {
  return x + y;
}

// exportar variaveis com o nome alterado

// podemos exportar qualquer coisa diretamento colocado a palavra export antes
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);
  this.nome = nome;
  this.sobrenome = sobrenome;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");

// pode ocorrer de variaves importadas terem o mesmo nome de uma variavel ja existente no arquivo e para contornar isso podemos "renomear a variavel importada"
// podemos exportar variaves ja com o nome alterado
var nome = 'yuuki';

// desta forma importamos um padrao que esta utilizando a palavra default no modulo1

console.log(nome);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome2, _modulo1__WEBPACK_IMPORTED_MODULE_0__.idade);
console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 5));
var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__.Pessoa('Luiz', 'Otavio');
console.log(p1);

/*
podemos importar tudo de de um modulo
import * as MeuModulo from './modulo1';
*/
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map