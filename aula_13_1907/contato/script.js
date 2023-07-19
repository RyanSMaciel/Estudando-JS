const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea");

function validarEmail(){
    const valor = email.value;
    if (valor.includes("@")) {
        email.style.borderColor = "green";
    }else{
        email.style.borderColor = "red";
    }
}

function validarCampoVazio(e) {
    const campo = e.target; // objeto target representa o elemento que acionou o evento
    const valor = campo.value;
    if (valor == "") {
        campo.style.borderColor = "red";
    }else{
        campo.style.borderColor = "green";
    }
}

function validarCampoVazio2(e) {
    const campo = e.target; // objeto target representa o elemento que acionou o evento
    const valor = campo.value;
    if (valor == "") {
        campo.style.borderColor = "red";
    }else{
        campo.style.borderColor = "#767676";
    }
}

function bloquearNumero(e) {
    const campo = e.target;
    const valor = e.target;
}

// for (let campo of campos) {
//     campo.addEventListener("change", validarCampoVazio);
// }
// email.addEventListener("keyup", validarEmail); // verfifica o email a cada tecla apertada

for (let campo of campos) {
    campo.addEventListener("blur", validarCampoVazio2);
}
