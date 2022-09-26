function sortearPalabra(){

    botonesInicio.style.display = "none";
    mostrar(juego);

    dibujarLinea();

    const cantidadPalabras = palabras.length;

    const numeroAleatorio = Math.floor(Math.random() * cantidadPalabras);

    palabraSorteada = palabras[numeroAleatorio];

    const numeroCaracteres = palabraSorteada.length;
    
    for(i = 0; i < numeroCaracteres; i++){
        
        let card = document.createElement("div");
        card.className = "caja-letra"

        card.innerHTML = `
                <p class="letra"></p> 
                <p class="guion"></p>
        `

        CAJA_PALABRA.appendChild(card);
    }
    return palabraSorteada;
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

    /*
    let idx = palabraSorteada.indexOf(letraPresionada);
    let indiceFail = letrasFallidas.indexOf(letraPresionada);
    let indiceAcierto = letrasCerteras.indexOf(letraPresionada);
    let indices = [];

    if(idx == -1 && indiceFail == -1){

        letrasFallidas.push(letraPresionada);

        console.log("letras fallidas: " + letrasFallidas);

        contadorFallido++;

        let cardFallido = document.createElement("div");
        cardFallido.className = "caja-letra-fallida"

        cardFallido.innerHTML = `
                <p class="letra-fallida">${letraPresionada}</p> 
                
        `

        cajaFallida.appendChild(cardFallido);
        
        console.log("esto es antes de empezar a dibujar")
        dibujarAhorcado(contadorFallido);
        
       

        console.log("intento fallido nro: " + contadorFallido);
        if(contadorFallido == 9){
            console.log("perdiste!")
        }
      }
      */
    
    /*while (idx != -1 && indiceAcierto == -1) {

        letrasCerteras.push(letraPresionada);

        console.log("letras certeras: " + letrasCerteras);
        indices.push(idx);
        contadorExitoso++
            
            if(idx < palabraSorteada.length){
                document.getElementsByClassName("letra")[idx].innerHTML = letraPresionada.toString();
           console.log("estas son los indices " + indices);
            }
            idx = palabraSorteada.indexOf(letraPresionada, idx + 1);
           

            if(contadorExitoso == palabraSorteada.length){
                console.log("ganaste!")
            }
        
      }*/
      
    
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

        console.log("letras certeras: " + letrasCerteras);
       
        contadorExitoso++
            
        console.log("antes de empezar a escribir la letra certera");
            if(indiceLetra < palabraSorteada.length){
                console.log("escribiendo la letra certera");
                document.getElementsByClassName("letra")[indiceLetra].innerHTML = letraPresionada.toString();
           
            }
            indiceLetra = palabraSorteada.indexOf(letraPresionada, indiceLetra + 1);
           

            if(contadorExitoso == palabraSorteada.length){
                console.log("ganaste!")
            }
        
      }
}

function desacierto(indiceLetra, indiceDesacierto, letra){
    if(indiceLetra == -1 && indiceDesacierto == -1){

        letrasFallidas.push(letra);

        console.log("letras fallidas: " + letrasFallidas);

        contadorFallido++;

        let cardFallido = document.createElement("div");
        cardFallido.className = "caja-letra-fallida"

        cardFallido.innerHTML = `
                <p class="letra-fallida">${letra}</p> 
                
        `

        CAJA_FALLIDA.appendChild(cardFallido);
        
        console.log("esto es antes de empezar a dibujar")
        dibujarAhorcado(contadorFallido);
        
       

        console.log("intento fallido nro: " + contadorFallido);
        if(contadorFallido == 9){
            console.log("perdiste!")
        }
      }
}

function mostrar(caja){
    console.log("esto es el contenido de la caja: ");
    console.log(caja.childNodes);
    caja.style.display = "flex";
    caja.style.flexDirection = "column"; 
}

function dibujarAhorcado(contador) {
    console.log("el contador es: " + contador)
    switch (contador) {
        case 1: dibujar(300, 700, 300, 100)
            break;

        case 2: dibujar(300, 100, 700, 100)
            break;

        case 3: dibujar(700, 100, 700, 150)
            break;

        case 4: dibujarCirculo(700, 200)
            break;

        case 5: dibujar(700, 250, 700, 500)
            break;

        case 6: dibujar(700, 250, 600, 350)
            break;

        case 7: dibujar(700, 250, 800, 350)
            break;

        case 8: dibujar(700, 500, 600, 600)
            break;

        case 9: dibujar(700, 500, 800, 600)
            //perdiste.style.display = "flex";
            cartelPerdiste();
            break;

    }
}

let palabras = ["ECLIPSE", "GALAXIA", "ESTRELLA", "NEBULOSA", "UNIVERSO", "PLANETA", "SOL", "ESPACIO"];

let palabraSorteada = "";
let contadorExitoso = 0;
let contadorFallido = 0;
let letrasFallidas = [];
let letrasCerteras = [];
let esUnaLetra = false;

const CAJA_PALABRA = document.getElementById("caja-palabra");

let juego = document.querySelector("#display-juego");

let botonesInicio = document.querySelector("#botones-inicio");

const CAJA_FALLIDA = document.getElementById("caja-fallida");

let lienzo = document.getElementById('responsive-canvas') //.getContext("2d") ;

const perdiste = document.getElementById('cartel-perdiste');
//let heightRatio = 1;
//canvas.height = canvas.width * heightRatio;

//lienzo.canvas.width = innerWidth;
//lienzo.canvas.height = innerHeight;

/*let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d");*/