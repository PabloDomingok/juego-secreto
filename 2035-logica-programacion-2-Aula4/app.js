let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

// //desafío 1

// let listaGenerica=[];

// //desafío 2

// let lenguajesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// //desafío 3

// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// //desafío 4

// function mostrarElementos(){
//     console.log(lenguajesDeProgramacion);
// }

// //desafío 5

// function mostrarInverso(){
//     let lenguajesDeProgramacion2=[];
//     for(let i =lenguajesDeProgramacion.length-1;i>=0;i--){
//         lenguajesDeProgramacion2.push(lenguajesDeProgramacion[i]);
//     }
//     console.log(lenguajesDeProgramacion2);
// }
// //desafío 6

// function mostrarPromedio(array){
//     let promedio=0;
//     for(let i=0;i<array.length;i++){
//         promedio+=array[i];
//     }
//     return promedio/array.length;
// }
// //desafío 7

// function encontrarMayorMenor(lista) {
//   let mayor = lista[0];
//   let menor = lista[0];

//   for (let i = 1; i < lista.length; i++) {
//     if (lista[i] > mayor) {
//       mayor = lista[i];
//     }
//     if (lista[i] < menor) {
//       menor = lista[i];
//     }
//   }

//   console.log('Mayor:', mayor);
//   console.log('Menor:', menor);
//   }

//   //desafío 8


//   function sumaDeElementos(array){
//     let suma=0;
//     for(let i=0; i<array.length;i++){
//         suma+=array[i];
//     }
//     return suma;
//   }
//   //desafío 9
  
//   function encuentraElIndiceDeElemento(array, element){
//     for(let i=0; i <array.length; i++){
//         if(array[i]===element){
//             return i;
//         }

//     }
//     return -1;
//   }

//   //desafío 10

//   function sumaDeArrayPorIndice(array1, array2) {
//     let resultArray = [];

//     if (array1.length === array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             resultArray.push(array1[i] + array2[i]);
//         }
//         return resultArray;
//     } else {
//         return -1;
//     }
// }



//   //desafío 11

//   function cuadradoDeCadaElemento(array){
//     let myArray=[];
//     for(let i=0; i<array.length; i++){
//         myArray.push(Math.pow(array[i], 2));
//     }
//     return myArray;

//   }