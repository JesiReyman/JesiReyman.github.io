
//let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d");
pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "#8A3871";
function dibujarLinea(){

    console.log("esta es la funcion dibujar linea");
   
    pincel.fillRect(0, 0, 1000 , 800);
    
    pincel.beginPath();
    pincel.moveTo(200, 700);
    pincel.lineTo(800, 700);
    pincel.stroke();
    pincel.closePath();
}

function dibujar(xInicial, yInicial, xFinal, yFinal){
    pincel.beginPath();
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
    pincel.closePath();
}

function dibujarCirculo(xInicial, yInicial){
    pincel.beginPath();
    
    pincel.arc(xInicial, yInicial, 50, 0, 2 * Math.PI);
    pincel.stroke();
}

function cartelPerdiste(){
    console.log("esta es la funcion de cartel perdiste")
    pincel.font = "36px Inter";
    pincel.fillStyle = "purple";
    pincel.fillText("Perdiste!", 800, 200);
}

