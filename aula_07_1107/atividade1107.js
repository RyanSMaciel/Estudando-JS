// Questões:

// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto = "Hoje fui na casa de Ana e jogamos Valorant.",
    numDeA = 0
for(let i = 0; i < texto.length; i++){
    if(texto.charAt(i) == "A" || texto.charAt(i) == "a"){
        numDeA ++;
    }
}
console.log(texto + " tem %d letras A",numDeA);

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let rNum = 121
console.log(Math.sqrt(rNum));

// Escreva um programa que  arredonde um número para o inteiro mais próximo.
let aNum = 13.698
console.log(Math.round(aNum));

// Escreva um programa que  calcule o valor absoluto de um número.
let numAbs = -151
console.log(Math.abs(numAbs));

// Escreva um programa que  gere um número aleatório entre 10 e 20.
console.log(Math.floor(Math.random() * 11 + 10));

// Arredonde um número para um número específico de casas decimais.
let arNum = 13.1234;
console.log(arNum.toFixed(2));

// Escreva um programa que converta uma string para um número decimal e arredonde para o número inteiro anterior.
let numDec = "12.63123";
console.log(Math.floor(Number.parseFloat(numDec)));

// Verifique se um número é um valor finito, não infinito, NaN ou não.
let numInF = 123
if(isNaN(numInF)){
    console.log("%d é um NaN", numInF);
}else{
    console.log("%d é um número", numInF);
    if (isFinite(numInF)){
        console.log("O número %d é finito", numInF)
    }else if(isFinite(numInF) == false){
        console.log("O número %d é infinito", numInF);
    }
}

// Escreva um programa que verifique se a string "ba" contém em outras outra string.
let str = "Hoje comi um pão de batata em batatal, e estava muito bom! Pena que tinha uma barata no salão";
if (str.includes("ba")){
    console.log(str + " CONTÉM 'ba'");
}else{
    console.log(str + " NÃO CONTÉM 'ba'");
}

// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Extraia uma parte específica de uma string com base em índices.
let subsStr = str.substring(0, 18);
console.log("De 0 a 18 tem-se '%s'", subsStr);

// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(str.replaceAll("batata", "fuba"))

// Remova espaços em branco extras no início e no final e no final de uma string.
console.log(str.trim())

// Inverta uma string. Uitilize o laço for.
let strInvertida = "";
for(let i = str.length-1; i >= 0; i--){
    strInvertida += str.charAt(i);
}
console.log(strInvertida);