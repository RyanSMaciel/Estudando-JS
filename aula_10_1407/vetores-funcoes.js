const nums = [6, 9, 0, 8, 1, 4, 2, 5, 7, 7];
console.log(nums);

nums.unshift(9); // adiciona um elemento no inicio do vetor
console.log(nums); 

nums.push(4); // adiciona um elemento no final do vetor
console.log(nums);

nums.shift(); //remove o elemento inicial do vetor
console.log(nums);

nums.pop(); //remove o elemento final do vetor
console.log(nums);

let juncao = nums.join("-"); // faz junção dos elementos do vetor em um string
console.log(juncao);

let vetor2 = [5, 6, 7];
let vetor3 = nums.concat(vetor2);
console.log(vetor3);

// console.log(nums.sort()); 
const nomes = ["Beatriz", "Diego", "Adriano", "Gustavo", "Vitor", "Aline"];
console.log(nomes.sort()); // ordena o vetor na ordem alfabética (modifica o vetor)

console.log(nums. reverse()); // modifica o vetor, revertendo a ordem dos elementos

console.log(nums.includes(10)); // retorna um boolean

// console.log(nums.fill(0)); // preenche todos os elementos com 0
// console.log(nums.fill(7, 2, 4)); // preencher com 7 de 2 a 4-1

console.log(nums.indexOf(3)); // retorna o indice do primeiro elemento do vetor

console.log(nums);
// console.log(nums.splice(6, 3)); // remove elementos do meio do vetor(modifica o vetor)
console.log(nums);
// console.log(nums.slice(2, 5)); // recortar um vetor do indice 2 a 4-1(não modifica)

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
    
// }
// for(let num of nums){
//     console.log(num);
// }
nums.forEach(num => console.log(num)); // itera sobre os elementos do vetor
console.log(nums.reduce((acumulador, num) => (acumulador + num)));
console.log("=====================")
console.log(nums.reduce((acumulador, num) => (acumulador - num)));

console.log(nums.map(num => num * 2)); // multiplica todos os valores por 2 e gera um novo vetor

console.log(nums.find(num => (num < 4))); // procura o número mais proximo, considerando a condição

console.log(nums.filter(num => (num < 7))); // retorna os valores correspondentes a condição

const names = [ 'João Silva',
                'Maria Santos',
                'Pedro Costa',
                'Ana Maciel',
                'Lucas Pereira',
                'Juliana Maciel',
                'Rodrigo Souza',
                'Fernanda Rodrigues',
                'Gabriel Lima',
                'Isabela Gomes'];

console.log(names.find(nome => nome.includes("Maciel")));
console.log(names.filter(nome => (nome.includes("Maciel"))));

// String com Vetor
let nome = "Ryan Maciel";
let idade = 23;
let mensagem = `Nome: ${nome} \n Idade: ${idade}`; // interpolação
console.log(mensagem);

console.log(nome.charAt(2));
console.log(nome[2]);

