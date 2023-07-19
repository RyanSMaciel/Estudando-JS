// Evento -> Ação (Clique, Teclar, Movimentar o cursor)
// click -> Cloque do mouse
// dblclick -> Duplo clique do mouse
// keydown -> Apertar o botão
// keyup -> Soltar o botão
// mouseover -> Moveu o ponteiro do mouse sobre o elemento
// mouseout -> Moveu o ponteiro do mouse parra fora do elemento
// submit -> submeter os dados de um formulário
// change -> Alterar o valor de um capo formulário
// focus -> Evento acionado quando o foco está sobre o elemento

//https://www.w3schools.com/jsref/dom_obj_event.asp

let quadrado = document.querySelector("#quadrado");

// function generateAleatorioEntre(min, max){
//     Math.random()
// }
quadrado.onclick = () => { // primeira forma de adicionar um "ouvidor de eventos"
    quadrado.style.backgroundColor = "blue";
    quadrado.style.borderRadius = "100px";
    quadrado.style.transform = "translateY(200px)";
}

quadrado.ondblclick = () => { 
    quadrado.style.backgroundColor = "aqua";
    quadrado.style.borderRadius = "0px";
    quadrado.style.transform = "translateY(0)";
}

function changeColorSquare(){// segunda forma de adicionar um "ouvidor de eventos"
    quadrado.style.backgroundColor = "red"; // POUCO UTILIZADA
}

quadrado.addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "green";
}); // terceira forma de adicionar um "ouvidor de eventos"

console.log({quadrado});