//ARRAYS
const arr = [1, 3, 4, 5, 8, 9];

//MAP - Percorre o array e retorna uma nova informação
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//Reduce - Consome todo o array e transforma em uma unica informação
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//Filter - percorre o array e retorna apenas os que combinem com o filtro passado (true)
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//Find - busca uma informação dentro do array
const find = arr.find(function(item){
    return item === 2;
});

console.log(find);