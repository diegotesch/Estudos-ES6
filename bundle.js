"use strict";

//Valores Padr�o
function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma(1));
console.log(soma());
console.log(soma(1, 1));

var somaArrow = function somaArrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(somaArrow(2));
console.log(somaArrow());
console.log(somaArrow(2, 8));
