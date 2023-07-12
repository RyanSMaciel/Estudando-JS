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

// setTimeout(() => {
//     console.log("setTimeout com Função Arrow")
// }, 2000);

// // parametro => escopo
// (resultado, requisicao) =>{
//     console.log(resultado + " " + requisicao)
//     return 0;
// }

// testando a utilização das arrow functions
function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}

// Primeira forma de executar "teste" (Função Expression)
function vezes2(numero) {
    return (2 * numero);
}
teste(vezes2);

// Segunda forma de executar "teste" (Função Anonima)
teste(function(numero) {
    return (numero * 2);
});

// Terceira forma de executar "teste" (Função Arrow) - Modo 2
teste((numero) =>{
    return (numero * 2);
});

// Quarta forma de executar "teste" (Função Arrow) - Modo 2
teste(numero => (numero * 2));

setInterval(() => console.log("Olá, Mundo"), 3000);