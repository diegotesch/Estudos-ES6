//Valores Padrão
function soma(a = 3, b = 6){
    return a + b;
}

console.log(soma(1));
console.log(soma());
console.log(soma(1, 1));

const somaArrow = (a = 3, b = 6) => a + b;

console.log(somaArrow(2));
console.log(somaArrow());
console.log(somaArrow(2, 8));