// function somar(n1, n2) {
//     let soma = n1 + n2;
//     return soma;
// }

// function dividir(num, den) {
//     if (den == 0) {
//         return;
//     }
//     return (num/den);
// }

// const num = dividir(22, 0);
// console.log(num);

// callback -> função que é passado como parametro de outra função

// function requisicaoParaBanco(callbackSuccess, callbackError) {
//     for (let i = 0; i < 10000; i++) { // isso vai demorar alguns segundos
//         if (i === -100) { // aqui gerou um erro
//             callbackError();
//         }
//     }
//     callbackSuccess();
// }

// function sucesso(res) {
//     console.log("A função funcionou!");
//     console.log(res)
// }

// function erro() {
//     numError++;
//     console.log("DEU RUIM!");
// }

// requisicaoParaBanco(sucesso, erro);

//Função Anônima

// function teste(){
//     console.log("Olá, Mundo!");
// }

// setTimeout(teste, 2000);

// setInterval(teste, 2000);

// setTimeout(function(){
//     console.log("Olá, mundo!");
// }, 3000);

// setInterval(function(){
//     console.log("Olá, Mundo com setInterval")
// }, 2000)

// let funAno = function(){

// }

// Arrow Functions -> Funções de Seta -> Funções Anônimas
// setTimeout(function() {
//     console.log("Função Anônima");
// }, 2000);

setTimeout(() => {
    console.log("setTimeout com Função Arrow")
}, 2000);

// parametro => escopo
(resultado, requisicao) =>{
    console.log(resultado + " " + requisicao)
    return 0;
}