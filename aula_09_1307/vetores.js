// Vetores - Arrays
// let nome = "Valor"; // variáveis simples
// let nota = 9.6; // variáveis simples

let notas = [9.6, 6.6, 7.7]; // variável composta
let times = ["Botafogo", "Grêmio", "Flamengo", "Fluminense"];
let ativados = [true, false, false, true];
let ryan = ["Ryan", 23, "Ensino Superior", true]; // MÁ PRÁTICA

// console.log(typeof nota); // number
// console.log(typeof notas); // object
// console.log(notas.length); // tamanho do vetor

let pesos = [89.5, 60.0, 45.5, 67.0, 76.3];
// console.log(pesos.length); // contagem de elementos (5)
// console.log(pesos[2]); // elemento 3 (0, 1, 2, 3, 4)
// console.log(pesos[pesos.length-1]); // ultimo elemento da lista
// console.log(pesos);

// for (let i = 0; i < pesos.length; i++) {
//     console.log(pesos[i]); // iterar sobre o vetor
// }

// let operacoes = [
//     (n1, n2) => n1 + n2,
//     (n1, n2) => n1 - n2,
//     (n1, n2) => n1 * n2,
//     (n1, n2) => n1 / n2
// ]

// console.log(operacoes[0](3, 4)); 
// console.log(pesos);
// pesos[2] = 54.5;
// console.log(pesos);

// MULTIPLICAR TODOS POR 2
// console.log(pesos)
// for (let i = 0; i < pesos.length; i++) {
//     pesos[i] *= 2;
// }
// console.log(pesos)

//SOMAR TODOS E MULTIPLICAR POR 2
// let acumulador = 0;
// for (let i = 0; i < pesos.length; i++) {
//     acumulador += pesos[i];
// }
// console.log(acumulador * 2)

// quando os valores do vetor
for(let peso of pesos){ // for each
    console.log(peso)
}

// quando os indices do vetor
for(let index in pesos){ // for each
    console.log(index);
    console.log(pesos[index]);
}
