let pincel = lienzo.getContext("2d");
pincel.lineWidth = 8;
pincel.lineCap = "round";
pincel.lineJoin = "round";
pincel.fillStyle = "#F3F5F6";
pincel.strokeStyle = "#8A3871";

function dibujarCanvas(){
    pincel.fillStyle = "#F3F5F6";
    pincel.fillRect(0, 0, 1000 , 800);
    pincel.strokeStyle = "#8A3871";
    dibujarLinea(200, 700, 800, 700);
}

function dibujarLinea(xInicial, yInicial, xFinal, yFinal){
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
    
    pincel.font = "36px Inter";
    pincel.fillStyle = "red";
    pincel.fillText("Fin del juego!", 800, 200);
}

function cartelGanaste(){
    
    pincel.font = "36px Inter";
    pincel.fillStyle = "darkgreen";
    pincel.fillText("Ganaste,", 800, 200);
    pincel.fillText("Felicidades!", 800, 250);
}

