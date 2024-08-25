var textoIngresado;

var infoInicial = document.getElementById("informacionInicial");
var textoEncriptado = document.getElementById("box");
var botonCopiar = document.getElementById("botonCopiar");

function encriptarTexto() {
    textoIngresado = document.getElementById("textoEncriptar").value;
    let pruebaDigitos = revisionTexto(textoIngresado);

    if (pruebaDigitos) {

        infoInicial.remove();
        botonCopiar.removeAttribute("Hidden");
        textoEncriptado.value = encriptandoTexto(textoIngresado);

    } else {

        alert("Ingresa de nuevo el texto que deseas encriptar, recuerda no puedes usar mayúsculas ni signos especiales.");

    }
}

function desencriptarTexto() {
    textoIngresado = document.getElementById("textoEncriptar").value;
    let pruebaDigitos = revisionTexto(textoIngresado);

    if (pruebaDigitos) {

        textoEncriptado.value = desencriptandoTexto(textoIngresado);

    } else {

        alert("Ingresa de nuevo el texto que deseas encriptar, recuerda no puedes usar mayúsculas ni signos especiales.");

    }
}

function revisionTexto(texto) {

    if (/[A-Z]/.test(texto)) {

        return false;

    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(texto)) {

        return false;

    } else {

        return true;

    }
}

function encriptandoTexto(texto) {

    let nuevoTexto = "";

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] == "a") {
            nuevoTexto = nuevoTexto + "ai";
        } else if (texto[i] == "e") {
            nuevoTexto = nuevoTexto + "enter";
        } else if (texto[i] == "i") {
            nuevoTexto = nuevoTexto + "imes";
        } else if (texto[i] == "o") {
            nuevoTexto = nuevoTexto + "ober";
        } else if (texto[i] == "u") {
            nuevoTexto = nuevoTexto + "ufat";
        } else {
            nuevoTexto = nuevoTexto + texto[i];
        }

    }

    return nuevoTexto;
}

function desencriptandoTexto(texto){

    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

async function copiarTexto(){
    let textoCopiado = textoEncriptado.value;
    
    await navigator.clipboard.writeText(textoCopiado);
}