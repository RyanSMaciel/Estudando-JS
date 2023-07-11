// Funções (function) -> Rotina

// let num = 16,
//     quadrado = 16**2;
// console.log(quadrado);

// let num1 = 4,
//     num2 = 5;
// function mult(x, y) {
//     console.log("O primeiro número é %d", x);
//     console.log("O segundo número é %d", y);
//     console.log("O produto é %d", (x * y));
// }
// mult(num1, num2)

// let result = console.log("OI");
// result

console.log(Number.isNaN(NaN));
console.log(Number.isFinite(10));
console.log(Number.parseInt(12.4));
console.log(Number.parseFloat(12));

let numero = 22.478;
console.log(numero.toFixed(2));
console.log(numero.toFixed(1));
console.log(numero.toFixed());
console.log(numero.toPrecision(3));
console.log(numero.toString());

// Funções de Texto

let texto = "     Bata ta";

console.log(texto.charAt(0))
console.log(texto.concat(" Bata", "ta")); // concatena variável com " bata" + "ta"
console.log(texto.charAt(texto.length-1)); // imprime o último caractere
console.log(texto.trim());
console.log(texto.replace(" ", ""));

texto = texto.replaceAll(" ", "");
console.log(texto);

console.log(texto.includes("bata"));
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());
let busca = "BaTat"
console.log(texto.toLowerCase().includes(busca.toLowerCase()));

console.log(texto.replace("t", "r").replace("a", "i").replace("t", "k"));
console.log(texto.indexOf("t"));

// Math. -> Biblioteca matemática
console.log(Math.ceil(2.3789)); // arrendonda pra cima
console.log(Math.floor(2.3789)); // arrendonda pra baixo
console.log(Math.round(2.3789)); // arredonda pro mais próximo
console.log(Math.sqrt(625)); // Raiz Quadrada
console.log(Math.abs(-625)); // valor absoluto
console.log(Math.random()); // numero randômico 0[1[
console.log(Math.floor(Math.random() *100 + 1)) // numero randômico entre 1 e 100