// Questões:

// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
function mediaPonderada(n1, n2, n3) {
    return (((n1 * 2) + (n2 * 3) + (n3 * 4)) / 9);
}
console.log("Média ponderada entre 6, 7 e 8 é %d",mediaPonderada(6, 7, 8));

// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.

function numDivisores(num) {
    let qtde = 0;
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            qtde++;
        }
    }
    return qtde;
}
console.log("A quantidade de divisores de 78 é %d", numDivisores(78))

// Crie uma função que calcule a soma de todos os dígitos de um número.
function numDigitos(num) {
    let numTexto = num.toString(),
        acumulador = 0;
    for (let index = 0; index < numTexto.length; index++) {
        acumulador += parseInt(numTexto.charAt(index));
    }
    return acumulador;
}
console.log("A soma dos dígitosde 4629 é %d", numDigitos(4629));

// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.
function reverterTexto(params) {
    let textRevertido = "";
    for (let i = params.length-1; i > -1; i--) {
        textRevertido += params.charAt(i);
    }
    return textRevertido;
}
console.log("'A frase do dia é:' revertida, fica %s ", reverterTexto("A frase do dia é:"));

// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.
function vm(c, t) {
    return (c / t)
}
let x =100, y = 8
console.log("A velocidade média de uma moto que percorreu %d km em %d horas é de %d Km/h", x, y, vm(x, y));

// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.
function isVogal(char) {
    switch (char.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
    }
    return false;
}

function removeVogais(txt) {
    let txtSemVogal = "";
    for (let i = 0; i < txt.length; i++) {
        if (!isVogal(txt.charAt(i))) {
            txtSemVogal += txt;
        }
        return txtSemVogal;
    }
}
console.log("'JavaScript' sem vogal fica: %s", removeVogais("JavaScript"));

// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário.
function DecToBin(num) {
    let bi = "",
        div = num;
        for (;;) {
            if (div <= 0)
                break;
            let resto = div % 2;
            div = parseInt(div / 2)
            bi = resto + bi;
        }
        return bi;
}
console.log("345 na base binária é %s", DecToBin(345));

// let num = 10;
// console.log(num.toString(10));
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.
function repetir(callback, interation) {
    for (let i = 0; i < interation; i++) {
        callback(i);
    }
}

repetir(index => console.log("Repetição #"+(index+1)), 10)