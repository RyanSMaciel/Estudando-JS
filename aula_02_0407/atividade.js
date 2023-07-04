// O objetivo geral deste conjunto de questões práticas em JavaScript é permitir a prática da
// aplicação dos operadores para resolver problemas comuns utilizando a linguagem JavaScript.

// Questões:
// Escreva um programa que verifique se um número é par ou ímpar.
let num = 1230,
    result,
    msg;
result = num % 2;
msg = (result == 1) ? "Impar" : "Par"; 
console.log("1) O número %d é %s", num, msg);

// Faça um programa que calcule a média aritmética de três números.
let num1 = 10,
    num2 = 8,
    num3 = 3,
    media;
media = (num1 + num2 + num3) / 3;
console.log("2) Média = %d", media);

// Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.
let numd = 15,
    operacao,
    msgd;
operacao = (numd % 3) == 0 && (numd % 5) == 0;
msgd = operacao ? "Divisível por 3 e 5." : "Não divisível por 3 e 5.";
console.log("3) %d: %s", numd, msgd);

// Faça um programa que calcule a área de um triângulo com base e altura.
let b = 3,
    h = 13,
    calcArea;
calcArea = (b*h) / 2;
console.log("4) Área do triangulo igual a %d", calcArea);

// Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
let c = 30,
    f;
f = (c * (9/5)) + 32;
console.log("5) %d°C equivale a %d°F", c, f);

// Faça um programa que calcule o delta das funções de segundo grau.
let b1 = 7,
    a1 = 5,
    c1 = 2,
    d;
d = (b1**2) - (4*a1*c1);
console.log("6) Sendo b = %d, a = %d e c = %d, delta vale %d", b1, a1, c1, d);

// Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).
let idade = 13,
    mensagem,
    condicao;
    condicao= idade >= 18
mensagem = condicao ? "Pode dirigir" : "Ainda não pode dirigir";
console.log("7) Com %d anos... %s", idade, mensagem);