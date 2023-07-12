// Funções
// Argumentos -> Parâmetros

// Funções que recebem parametros
// Funções que NÃO recebem parametros
// Funções que retornam valores
// Funções que NÃO retornam valores

// let n1 = 7;
// let n2 = 9;
// function somar(n1 = 0, n2 = 0){
//     console.log("número 1 é " + n1);
//     console.log("número 2 é " + n2);
//     console.log("a soma é " + (n1 + n2));
// }
// let result = somar( 30, 17);
// console.log(result);

// function soma(n1 = 0, n2 = 0){
//     let soma = n1 + n2;
//     return soma;
// }
// result = soma(20, 7);
// console.log(result)

function calc(n1, n2, op = "+"){
    switch(op){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
    return NaN;
}

console.log(calc(1, 2));
console.log(calc(1, 2, "*"));
console.log(calc(1, 2, "soma"));
console.log(calc(1, -2, "-"));

// Entrada
// Processamento
// Saída

function desTriang(h) {
    for(let i = 0; i <= h; i++){
        let linha = "";
        for(let e = 0; e < (h - i); e++){
            linha += " ";
        }
        for (let c = 0; c < i; c++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

desTriang(5);