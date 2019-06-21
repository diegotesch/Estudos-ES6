class Matematica{

    //metodo estatico não pode depender de nenhum elemento da classe, apenas executar e retornar algo
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 1));
console.log(Matematica.soma(1, 2));
console.log(Matematica.soma(1, 3));
console.log(Matematica.soma(1, 4));
console.log(Matematica.soma(1, 5));