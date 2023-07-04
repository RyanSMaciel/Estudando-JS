// Peradores Aritméticos -> + - * /

let restult;

// restult = 4 + 5; // 9
// console.log(restult);

// restult = 9 * 3; // 27
// console.log(restult);

// restult = ((3 + 7) * 12) / 6; // 20
// console.log(restult);

//Operadores de Atribuição - > += -= *= %= /= **=
// restult = restult + 30;
// restult += 30;
// console.log(restult); //50

// restult -= 45;
// console.log(restult); // 5

// restult *= 7;
// console.log(restult); // 35

// restult %= 9;
// console.log(restult); // 8

// restult /= 2;
// console.log(restult); // 4

// restult **= 2;
// console.log(restult); // 16

// Operadores Incremento e Decremento

/*
    a++ -> Pós Incremento
    ++a -> Pré Incremento
    a-- -> Pós Decremento
    --a -> Pré Decremento
*/

// let a = 0;
// console.log(a); // 0

// console.log(a++); // a += 1, mas não mostra no console atual, pois ele só executa após o console
// console.log(a); // aqui o valor será 1, por ter executado o a++ na linha anterior

// console.log(++a); // 2

// console.log(--a); // 1

// console.log(a--); // 1

// // operadores Relacionais
// /*
//     < Menor que
//     > Maior que
//     <= Menor ou Igual
//     >= Maior ou Igual
//     == Igual a
//     === Igual a e mesmo tipo
//     != Diferente de
// */

// const   n1 = 9,
//         n2 = 11,
//         n3 = 9,
//         n4 = 13,
//         n5 = '11';

// restult = n1 < n2;
// console.log(restult); // True

// restult = n1 > n2;
// console.log(restult); // False

// restult = n1 <= n2;
// console.log(restult); // True

// restult = n1 > n2;
// console.log(restult); // False

// restult = n1 < n3;
// console.log(restult); // False

// restult = n1 >= n3;
// console.log(restult); // True

// restult = n1 > n3;
// console.log(restult); // False

// restult = n1 != n3;
// console.log(restult); // False

// restult = n3 == n4;
// console.log(restult); // False

// restult = n2 == n5;
// console.log(restult); // True

// restult = n2 === n5;
// console.log(restult); // False

// restult = "Ryan" == "Ryan";
// console.log(restult); // True

// restult = "Ryan Maciel" == "Ryan Santos";
// console.log(restult); // False

// // Operadores Lógicos
// /**
//     && -> e
//     || -> ou
//     ! -> Não
// */

// console.log(true);
// console.log(false);

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(true && true && true && true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || true || true || true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log(!true); // false
// console.log(!false); // true

// console.log(!true || false); // false
// console.log(true || true && false); // true
// console.log((true || true) && false); // false

// dada a idade, a pessoa é obrigada a votar
// let idade = 23;
// let calculo = idade >= 18 && idade <= 65;
// console.log(calculo);

// Operador Ternário
// condição ? true : false;
let mensagem;
let nota1 = 3;
let nota2 = 10
let condicao = (nota1 + nota2) / 2 >= 7
mensagem = condicao ? "Aprovado" : "Reprovado";
console.log(mensagem);