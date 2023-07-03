// Tipagem Estática -> Definição de um tipo a cada variável (java, C, C++, TypeScript)
// Tipagem Dinâmica -> O tipo da variável é definido de acordo com seu valor (JavaScript, Python)

// typeof -> Operador que retorna o tipo da variavel
let variavel = 22;
console.log(typeof variavel); //number

variavel = "Ryan Maciel";
console.log(typeof variavel); //string

variavel = true;
console.log(typeof variavel); //booleano

variavel = {nome: "Gabriel", idade: 21};
console.log(typeof variavel); //object

variavel = [1, 2, 3, 4, 5]; // array
console.log(typeof variavel); //object

variavel = function() {return 1};
console.log(typeof variavel); //function

variavel = undefined;
console.log(variavel); // undefined

variavel = null;
console.log(variavel); // null

variavel = NaN;
console.log(variavel); // Nan

variavel = null;
console.log(variavel); // null