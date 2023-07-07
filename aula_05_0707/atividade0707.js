// Objetivo:
// Exercitar os conceitos fundamentais de JavaScript e fortalecer as habilidades de programação, por meio da resolução de exercícios práticos.


Questões:
// Escreva um programa que imprima os números de 1 a 20 usando um loop for.
for(let numero = 1 ; numero <= 20; numero++){
    console.log(numero)
}

// Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
let fibo = 0,
    fibo1 = 1,
    recFibo,
    i;
while(i < 10){
    console.log(fibo);
    recFibo = fibo + fibo1
    fibo = fibo1;
    fibo1 = recFibo;
    i++
}

// Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
let num1 = 5,
    soma = 0;
for(let i = 0; i <= num1; i++){
    if (!(i % 2 == 0)){
        soma += i
    }
}
console.log(soma);

// Faça um programa que receba um número e exiba a tabuada desse número usando um loop for.
let tab = 9,
    calc;
for(let i = 1; i <=10; i++){
    calc = tab * i;
    console.log("%d x %d = %d", tab, i, calc);
}

// Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
for (let i = 1; i <= 100; i++){
    if((i % 7 == 0)){
        console.log(i);
    }
}

// Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
let linha = "",
    pisos = 10;
for(let j = 0; j < pisos; j++){
    linha += " * "
    console.log(linha);
}

// Desenha um quadrado com @, mas seu interior deve ser oco.
let linhaQ = "",
    ladoQ = 5;
for(let y = 1; y <= ladoQ; y++){
    let linhaQ = "";
    for(let x = 1; x <= ladoQ; x++){
        if(y == 1 || y == ladoQ || x == 1 || x == ladoQ){
            linhaQ += "@ "
        }else{
            linhaQ += "  "
        }
    }
    console.log(linhaQ);
}
