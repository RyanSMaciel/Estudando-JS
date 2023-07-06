// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let num1 = 0;
if(num1 > 0){
    console.log("1) O número %d é positivo!", num1);
}else if(num1 < 0){
    console.log("1) O número %d é negativo!", num1);
}else{
    console.log("1) O número é ZERO");
}

// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 23;
if(idade >= 18){
    console.log("2) Com %d anos, você é MAIOR de idade!", idade);
}else{
    console.log("2) Com %d anos, você é MENOR de idade", idade);
}

// Escreva um programa que receba três números e determine qual deles é o maior.
let n1 = -1,
    n2 = -1,
    n3 = -3;
if(n1 > n2 && n1 > n3){
    console.log("3) O número %d é o maior do que %d e %d", n1, n2, n3);
}else if(n2 > n1 && n2 > n3){
    console.log("3) O número %d é o maior do que %d e %d", n2, n1, n3);
}else if(n3 > n1 && n3 > n2){
    console.log("3) O número %d é o maior do que %d e %d", n3, n1, n2);
}else{
    console.log("3) Alguns números podem ser iguais. ");
}

// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
let pi1 = 3,
    pi2 = 2,
    calc,
    prod;
prod = (pi1 * pi2)
calc = prod % 2
switch(prod){
    case 0:
        console.log("4) O produto de (%d x %d) é igual a %d, que é PAR.", pi1, pi2, prod);
        break;
    case 1:
        console.log("4) O produto de (%d x %d) é igual a %d, que é IMPAR.", pi1, pi2, prod);
        break;
}

// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "Sexta",
    diaCerto = dia.normalize('NFD').replace(/[^a-zA-Z\s]/g, "").toLowerCase();
if(diaCerto == "segunda" || diaCerto == "terca" || diaCerto == "quarta" || diaCerto == "quinta" || diaCerto == "sexta"){
    console.log("5) %s representa um dia útil da semana, vá trabalhar :)", dia);
}else if(diaCerto == "sabado" || diaCerto == "domingo"){
    console.log("5) %s representa um dia não útil, vá descansar, militante :)", dia);
}else{
    console.log("5) Infelizmente, %s não representa um dia da semana...", dia);
}
// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let diaNum = 4
switch(diaNum){
    case 1:
        console.log("6) %d representa DOMINGO", diaNum);
        break;
    case 2:
        console.log("6) %d representa SEGUNDA-FEIRA", diaNum);
        break;
    case 3:
        console.log("6) %d representa TERÇA-FEIRA", diaNum);
        break;
    case 4:
        console.log("6) %d representa QUARTA-FEIRA", diaNum);
        break;
    case 5:
        console.log("6) %d representa QUINTA-FEIRA", diaNum);
        break;
    case 6:
        console.log("6) %d representa SEXTA-FEIRA", diaNum);
        break;
    case 7:
        console.log("6) %d representa SÁBADO", diaNum);
        break;
    default:
        console.log("6) %d não representa um dia da semana...", diaNum);
        break;
}