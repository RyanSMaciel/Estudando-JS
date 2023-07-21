import { melhoresFilmes } from "./filmes.js";
// import melhoresFilmes from "./filmes2.js"; //busca o defaut

function prencherLista(filmes){
    const lista = document.querySelector("#lista-filmes")
    lista.innerHTML = "";
    filmes.forEach(filme => {
        lista.innerHTML += `<li>${filme.titulo}</li>`
    })
    // for(let filme of melhoresFilmes){
    //     lista.innerHTML += `<li>${filme.titulo}</li>`
    // }
    
};

prencherLista(melhoresFilmes);