"use strict";

//Arrow Function
var arr = [1, 3, 4, 5, 6]; // const newArr = arr.map(function(item){
//     return item * 3;
// });
//vers�o 1 - (1 parametro)
// const newArr = arr.map((item) => {
//     return item * 3;
// });
// console.log(newArr);
//versao 2 - (1 parametro)
// const newArr = arr.map(item => {
//     return item * 3;
// });
// console.log(newArr);
//versao 3 - (1 parametro)
// const newArr = arr.map(item => item * 3);
// console.log(newArr);
//Criando Funcao diretamente com ArrowFunction

var TesteArrowFunction = function TesteArrowFunction() {
  console.log("Esta � uma fun��o criada com Arrow Function");
};

TesteArrowFunction();

var teste = function teste() {
  return 'Diego';
};

console.log(teste());

var teste2 = function teste2() {
  return {
    nome: 'Diego',
    idade: 31
  };
};

console.log(teste2());
