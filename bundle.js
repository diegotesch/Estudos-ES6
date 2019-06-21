"use strict";

//ARRAYS
var arr = [1, 3, 4, 5, 8, 9]; //MAP - Percorre o array e retorna uma nova informa��o

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Reduce - Consome todo o array e transforma em uma unica informa��o

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //Filter - percorre o array e retorna apenas os que combinem com o filtro passado (true)

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //Find - busca uma informa��o dentro do array

var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
