//Reduccion de codigo volviendo a las funciones genericas y uso en liness de codigo 25 y 26.
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;
let rangoDeNumero= 10;

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
                asignarTextoElemento('p','El numero secreto es mayor');
            }
        }
        intentos++;
        
        limpiarCaja();
    }
    
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
   
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*rangoDeNumero)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya jugaste la cantidad de juegos permitidos');
    } else {

    //Si el numero generado ya se encuentra en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
}
}

function condicionesIniciales (){
    asignarTextoElemento('h1',`Juego del numero secretito UwU`);
    asignarTextoElemento('p',`Por favor indica un numero entero del 1 al ${rangoDeNumero}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio de nuevo
    //Inicializar el conteo de intentos
    condicionesIniciales();
    //deasabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
}

condicionesIniciales();
