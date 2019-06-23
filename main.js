//DESAFIO
//Exercicio 1
/*
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        if(this.admin){
            return true;
        }
        return false;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const user = new Usuario('user@teste.com', '123');
const admin = new Admin('admin@teste.com', '123');

console.log(user.isAdmin());
console.log(admin.isAdmin());
*/

//Exercicio 2
// const usuarios = [
//     { nome: "Diego", idade: 31, empresa: "Programmable" },
//     { nome: "Andre", idade: 18, empresa: "Starter" },
//     { nome: "Scharlienny", idade: 25, empresa: "Programmable" },
// ];

//2.1
// const idades = usuarios.map(item => item.idade);
// console.log(idades);

//2.2
// const filter = usuarios.filter(item => item.empresa === "Programmable" && item.idade > 18);
// console.log(filter);

//2.3
// const google = usuarios.find(item => item.empres === 'Google');
// console.log(google);

//2.4
// usuarios.map(item => item.idade *= 2);
// const idade50 = usuarios.filter(item => item.idade <= 50);
// console.log(idade50);

//Exercicio 3
//3.1
//const arr = [1, 2, 3,4, 5];
// console.log( arr.map(item => item + 10) );

//3.2
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (user) => user.idade;
// console.log(mostraIdade(usuario));

//3.3
// const nome = "Diego";
// const idade = 31;
 
// const mostraUsuario = (nome = 'Nome', idade = 18) => {
//     return {nome, idade};
// };
// console.log( mostraUsuario(nome, idade) );
// console.log( mostraUsuario(nome) );
// console.log( mostraUsuario(undefined, 31) );

//3.4
// const promise = () => new Promise((resolve, reject) => resolve());

// console.log(promise);

//Exercicio 4
//4.1
// const empresa = {
//     nome: "Rocketseat",
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     },
// };

// const { nome, endereco } = empresa;
// const { cidade, estado} = endereco;

// console.log(nome);
// console.log(cidade);
// console.log(estado);

//4.2
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraInfo({nome, idade}){
//     return `${nome} tem ${idade} anos.`;
// }

// console.log( mostraInfo(usuario) );

//Exercicio 5
// const arr = [1, 2, 3, 4, 5, 6];

//5.1
// const [ x, ...y ] = arr;
// console.log(x);
// console.log(y);

// function soma(...params){
//     return params.reduce((total, next) => total + next);
// };
// console.log( soma(1, 2, 3, 4, 5, 6)) ;
// console.log( soma(1, 2) );

//5.2
// const usuario = {
//     nome: 'Diego',
//     idade: 31,
//     endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil',
//     },
// };

// const usuario2 = { ...usuario, nome: 'Gabriel' };
// const usuario3 = { ...usuario, endereco: {cidade: 'Lontras'} };

// console.log(usuario);
// console.log(usuario2);
// console.log(usuario3);

//Exercicio 6
// const usuario = 'Diego';
// const idade = 31;

// console.log(`O usuário ${usuario} possui ${idade} anos`);

//Exercicio 7
const nome = 'Diego';
const idade = 31;

const usuario = {
    nome,
    idade,
    cidade: 'Colatina'
};

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);