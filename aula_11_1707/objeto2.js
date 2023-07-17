class Pessoa{
    nome;
    idade;
    email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Ryan";
pessoa1.idade = 23;
pessoa1.email = "ryan.maciel@email.com";
pessoa1.cor = "Branco"; // é válido
console.log(pessoa1);


const pessoa2 = {
    nome: "Fernanda", // chave: valor
    idade: 22,
    email: "fernanda@email.com",
    foto: "https:///bancodefotos.com/986542114",
    enabled: true
}
console.log(pessoa2);

const vetor = ["Ryan", "Fernanda", "Ikaro"];
console.log(vetor[1]);
const objeto = {nome: 'Ryan', email: 'ryan@email.com'};
console.log(objeto.nome);

const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "600w",
    placaMae: "Asus"
};
const saldo = 4500;
if (saldo > 4000) {
    pc.placaVideo = "RXT 3080";
};
console.log(pc);

let n1 = 2, n2 = n1;
n1 = 3; // nao afeta o n2
console.log(n1);
console.log(n2);

let objeto1 = {
    nome: "Bruna",
    curso: "JavaScript"
};
// let objeto2 = objeto1; // não é feito a cópia do objeto, e sim da referencia dele na memória
let objeto2 = {...objeto1}; // copia os elementos do objeto1 e "espalhar" no objeto 2
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);
delete objeto1.nome; // remove a propriedade "nome" do objeto
console.log(objeto1);