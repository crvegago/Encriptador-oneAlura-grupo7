let botonEncriptar = document.querySelector(".boton__encriptar");
let botonDesencriptar = document.querySelector(".boton__desencriptar");
let munieco = document.querySelector(".contenedor__munieco");
let contenedor = document.querySelector(".contenedor__parrafo");
let resultado = document.querySelector(".texto__resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    let cajatexto = document.querySelector(".input1");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    document.querySelector(".contenedor__resultado").classList.remove("ocultar");
    document.querySelector(".contenedor__copiar").classList.remove("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;
}

const botonCopiar = document.querySelector(".boton__copiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto__resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});