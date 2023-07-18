// window.document -> Objeto que representa o documento HTML
// document.getElementById("") -> Busca todos os elementos por ID
// document.getElementByClassName("") -> Busca todos os elementos por class
// document.getElementsByTagName() -> Busca todos os elementos pelo nome da tag
// documento.querySelector() ->

// window.document.getElementById()

let h1 = document.getElementById("titulo"); // é muito utilizado
// console.log(h1)
let titulo = document.querySelector("#titulo"); // paralelo de getElementById
let paragrafos = document.getElementsByClassName("paragrafo");
// paragrafos[0].hidden = true
let b = document.getElementsByTagName("b");
let campoEmail = document.querySelector("input[type=email]");
let negritoParagrafo = document.querySelector("p b"); // é muito aplicado hoje
let negritosParagrafo = document.querySelectorAll("p b"); // é muito aplicado hoje

// titulo.align = "center";
// titulo.title = "Título Principal";
// titulo.style.color = "red";
// titulo.style.fontSize = "50px";

let primeiroParagrafo = document.querySelector("p");

// console.log(primeiroParagrafo.innerText); // conteudo textual do elemento
// console.log(primeiroParagrafo.innerHTML); // conteudo textual + html do elemento

// USO DE CLASSES COM JavaScript
let caixa = document.querySelector("#inform");
caixa.classList.add("erro"); // adiciona uma nova classe
caixa.classList.remove("mensagem"); // remove uma classe
caixa.classList.toggle("atencao"); // adiciona se nao existir
caixa.classList.toggle("atencao"); // remove se já adicionado
console.log(caixa)