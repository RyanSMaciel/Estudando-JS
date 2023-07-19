const imgs = [
    "imagens/vermelho.png",
    "imagens/amarelo.png",
    "imagens/verde.png"
]

const imagem = document.querySelector("#semaforo");
let indiceAtual = 0

let vermelho = document.querySelector("#vermelho");
let amarelo = document.querySelector("#amarelo");
let verde = document.querySelector("#verde");
let automatico = document.querySelector("#automatico");
let interval;

vermelho.onclick = () => {
    imagem.src = imgs[0];
    clearInterval(interval);
}

amarelo.onclick = () => {
    imagem.src = imgs[1];
    clearInterval(interval);
}

verde.onclick = () => {
    imagem.src = imgs[2];
    clearInterval(interval);
}

automatico.onclick = () => {
    interval = setInterval(() => {
        imagem.src = imgs[indiceAtual];
    if (indiceAtual == imgs.length-1) {
        indiceAtual = 0;
    }else{
        indiceAtual ++;
    }
    }, 2000);
}