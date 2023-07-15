// Objetivo:
// O objetivo geral deste conjunto de questões práticas em JavaScript é permitir a prática da aplicação de vetores e suas funções para resolver problemas comuns utilizando a linguagem JavaScript.

// Questões:
// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
const numbers = [3, 5, 7];
function somar(n){
    let soma = 0;
    for (let i = 0; i < n.length; i++) {
        soma += n[i]
    }
    return soma;
}
console.log(somar(numbers));
// console.log(numbers.reduce(a, n => a+n), 0);

// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
// const txt = ["Você", "Gostou", "Disso", "?"];
// function concatenar(t){
//     let txtConcat = "";
//     for (let texto of textos) {
//         txtConcat += texto + " "
//     }
//     console.log(soma); 
// }
// somar(numbers)

// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
function maiordoVetor(params) {
    let maior = params[0];
    for (let n of params) {
        if (n > maior) {
            maior = n;
        }
    }
    return maior;
}
console.log(maiordoVetor(numbers));

// Crie uma função que receba um vetor de números e retorne a média dos elementos.
// function mediaVetor(params) {
//     let total = 0,
//         tamanho = params.length;
//     for (let n) {
//         const element = array[];
        
//     }
// }

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
console.log(numbers.map(n => n**2));

// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.


// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.


// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
