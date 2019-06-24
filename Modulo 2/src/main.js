import axios from "axios";

//Exercicio 1
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo(){
//     await delay();
//     console.log('1s');
//     await delay();
//     console.log('2s');
//     await delay();
//     console.log('3s');
// }

// umPorSegundo();

//Exercicio 2
// async function getUserFromGithub(user){
//     try{
//         const res = await axios.get(`https://api.github.com/users/${user}`);

//         console.log(res.data);
//     }catch(err){
//         console.log('Erro na API');
//     }
// }

// getUserFromGithub('diegotesch');
// getUserFromGithub('dtesch');
// getUserFromGithub('dteschda3s3');

//Exercicio 3
// class Github{
//     static async getRepositories(respo){
//         try{
//             const res = await axios.get(`https://api.github.com/repos/${respo}`);
//             console.log(res.data);
//         }catch(err){
//             console.log('Repositório não encontrado');
//         }
//     }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dlkvmsk');
// Github.getRepositories('diegotesch/Estudos-ES6');
// Github.getRepositories('diegotesch/estudos');
// Github.getRepositories('diegotesch/blabla');

//Exercicio 4
const buscaUsuario = async user => {
    try{
        const res = await axios.get(`https://api.github.com/users/${user}`);
        console.log(res);
    }catch(err){
        console.log('Usuário não existe');
    }
}

buscaUsuario('diegotesch');
buscaUsuario('diego3g');
buscaUsuario('didaeego3g');