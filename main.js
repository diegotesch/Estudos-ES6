//Desestruturação
//OBJETOS
const usuario = {
    nome: 'Diego',
    idade: 31,
    empresa: 'Programmable'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//ARRAYS
const arr = [1, 2, 3, 4, 5, 6, 7];

const [ a, b, ...c] = arr;

console.log(a)
console.log(b)
console.log(c);

//PARAMETROS DE FUNCAO
function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(2, 3, 5, 10));

//SPREAD
const arr1 = [1, 2, 3, 7];
const arr2 = [4, 5, 6, 8];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user = {
    nome: 'Diego',
    idade: 31,
    empresa: 'Programmable'
};

const user1 = { ...user, empresa: 'Tesch' };

console.log(user1);