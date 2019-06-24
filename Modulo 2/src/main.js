const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

//MODELO ANTIGO - DEPRECIADO
// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {

//     });

//Obs: Await sempre seve ser utilizado dentro de uma função asincrona
// async function executaPromise(){
//     console.log( await minhaPromise() );
//     console.log( await minhaPromise() );
//     console.log( await minhaPromise() );
//     console.log( await minhaPromise() );
//     console.log( await minhaPromise() );
// }

//exemplo acima com arrow function
const executaPromise = async () => {
    console.log( await minhaPromise() );
    console.log( await minhaPromise() );
    console.log( await minhaPromise() );
    console.log( await minhaPromise() );
    console.log( await minhaPromise() );
}

executaPromise();