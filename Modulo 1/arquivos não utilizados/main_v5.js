//Arrow Function
const arr = [1, 3, 4, 5, 6];

// const newArr = arr.map(function(item){
//     return item * 3;
// });

//versão 1 - (1 parametro)
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
const TesteArrowFunction = () => {
    console.log("Esta é uma função criada com Arrow Function");
}

TesteArrowFunction();

const teste = () => 'Diego';
console.log(teste());

const teste2 = () => {
    return {
        nome: 'Diego',
        idade: 31
    }
}

console.log(teste2());