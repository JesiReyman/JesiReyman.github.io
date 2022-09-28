function sortearPalabra(){
     
    ocultar(botonesInicio);
    mostrar(juego);

    dibujarCanvas();

    const cantidadPalabras = palabras.length;

    const numeroAleatorio = Math.floor(Math.random() * cantidadPalabras);

    palabraSorteada = palabras[numeroAleatorio];

    numeroCaracteres = palabraSorteada.length;

    crearCajasDeLetras(numeroCaracteres);
    
    return palabraSorteada, numeroCaracteres;
}

window.addEventListener('keydown', function(e){
    let teclaPresionada = e.key;

    chequeoDeTecla(teclaPresionada);
    
    if(esUnaLetra === true){
        const LETRA = teclaPresionada.toLocaleUpperCase();

        let idx = palabraSorteada.indexOf(LETRA);
        let indiceFail = letrasFallidas.indexOf(LETRA);
        let indiceAcierto = letrasCerteras.indexOf(LETRA);

        acierto(idx, indiceAcierto, LETRA, palabraSorteada);
        desacierto(idx, indiceFail, LETRA);
    }

    
}, false)

function chequeoDeTecla(teclaPresionada){
    const LETRAS = /^[A-Za-z]+$/;
    if (teclaPresionada.match(LETRAS)) {
        
        esUnaLetra = true;
       
    }
    else {
        alert("Por favor, presione alguna letra");
        esUnaLetra = false;
    }
    return esUnaLetra;
}

function acierto(indiceLetra, indiceAcierto, letraPresionada, palabraSorteada){
    while (indiceLetra != -1 && indiceAcierto == -1) {

        letrasCerteras.push(letraPresionada);
        indices.push(indiceLetra);
       
        contadorExitoso++
            
        
            if(indiceLetra < palabraSorteada.length){
                
                document.getElementsByClassName("letra")[indiceLetra].innerHTML = letraPresionada;
           
            }
            indiceLetra = palabraSorteada.indexOf(letraPresionada, indiceLetra + 1);
           

            if(contadorExitoso == palabraSorteada.length){
                cartelGanaste();
            }
        
      }
}

function desacierto(indiceLetra, indiceDesacierto, letra){
    if(indiceLetra == -1 && indiceDesacierto == -1){

        letrasFallidas.push(letra);
        contadorFallido++;

        let cardFallido = document.createElement("div");
        cardFallido.className = "caja-letra-fallida"
        cardFallido.innerHTML = `
                <p class="letra-fallida">${letra}</p> 
                
        `
        CAJA_FALLIDA.appendChild(cardFallido);
        dibujarAhorcado(contadorFallido);
        
      }
}

function mostrar(caja){
    caja.style.display = "flex";
}

function ocultar(caja){
    caja.style.display = "none";
}

function dibujarAhorcado(contador) {
    
    switch (contador) {
        case 1: dibujarLinea(300, 700, 300, 100);
            break;

        case 2: dibujarLinea(300, 100, 700, 100);
            break;

        case 3: dibujarLinea(700, 100, 700, 150);
            break;

        case 4: dibujarCirculo(700, 200);
            break;

        case 5: dibujarLinea(700, 250, 700, 500);
            break;

        case 6: dibujarLinea(700, 250, 600, 350);
            break;

        case 7: dibujarLinea(700, 250, 800, 350);
            break;

        case 8: dibujarLinea(700, 500, 600, 600);
            break;

        case 9: dibujarLinea(700, 500, 800, 600);
            cartelPerdiste();
            break;

    }
}

function reset() {
    
    while (CAJA_PALABRA.hasChildNodes()) {
        CAJA_PALABRA.removeChild(CAJA_PALABRA.firstChild);
    }

    while (CAJA_FALLIDA.hasChildNodes()) {
        CAJA_FALLIDA.removeChild(CAJA_FALLIDA.firstChild);
    }
    
    palabraSorteada = "";
    contadorExitoso = 0;
    contadorFallido = 0;
    letrasFallidas = [];
    letrasCerteras = [];
    esUnaLetra = false;
    indices = [];
    numeroCaracteres = 0;

    sortearPalabra();
}

function crearCajasDeLetras(numeroCaracteres){
    for(i = 0; i < numeroCaracteres; i++){
        
        let card = document.createElement("div");
        card.className = "caja-letra";
        
        card.innerHTML = `
                <p class="letra"></p> 
                <p class="guion"></p>
        `
        CAJA_PALABRA.appendChild(card);
    }
}

function completarPalabra(){
    
    for(i=0; i < numeroCaracteres; i++){
        
        let fueCertero = indices.includes(i);
       
        if(!fueCertero){
            let posicionACompletar = document.getElementsByClassName("letra")[i];
            posicionACompletar.style.color = "red";
            posicionACompletar.innerHTML = palabraSorteada[i];
        }
    }
    setTimeout(function(){ volver(); }, TIME_TO_WAIT);
}

function volver(){
    ocultar(juego);
    mostrar(botonesInicio);
}

let palabras = ["ECLIPSE", "GALAXIA", "ESTRELLA", "NEBULOSA", "UNIVERSO", "PLANETA", "SOL", "ESPACIO", "LUNA", "ASTRO"];

let palabraSorteada; 
let contadorExitoso; 
let contadorFallido; 
let letrasFallidas; 
let letrasCerteras; 
let esUnaLetra; 
let indices; 
let numeroCaracteres; 

const CAJA_PALABRA = document.getElementById("caja-palabra");

let juego = document.querySelector("#display-juego");

let botonesInicio = document.querySelector("#botones-inicio");

const CAJA_FALLIDA = document.getElementById("caja-fallida");

let lienzo = document.getElementById('responsive-canvas') 

const perdiste = document.getElementById('cartel-perdiste');
const DESISTIR = document.getElementById('boton-desistir');

DESISTIR.addEventListener("click", completarPalabra, false);

const TIME_TO_WAIT = 2000; // in miliseconds.



  
