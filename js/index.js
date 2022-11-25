let num1;
let num2;
let operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    const reset = document.getElementById("reset");
    const sumar = document.getElementById("sumar");
    const restar = document.getElementById("restar");
    const multiplicar = document.getElementById("multiplicar");
    const dividir = document.getElementById("dividir");
    const igual = document.getElementById("igual");
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
    const seis = document.getElementById("seis");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const cero = document.getElementById("cero");


    //Eventos
    
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    reset.onclick = function(e) {
        resetear();
    }
    suma.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    division.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    igual.onclick = function(e){
        num2 = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = 0;
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            res = parseFloat(num1) - parseFloat(num2);
            break;
        case "/":
            res = parseFloat(num1) / parseFloat(num2);
            break;
        case "*":
            res = parseFloat(num1) * parseFloat(num2);
            break;
        default:
            break;
    }
    resetear();
    resultado.textContent = res;
}