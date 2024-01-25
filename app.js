let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10 ;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento()
{
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     /*console.log(numeroSecreto);
     console.log(numeroDeUsuario);
     console.log(numeroDeUsuario === numeroSecreto);*/
     if( numeroDeUsuario === numeroSecreto)
     {
        asignarTextoElemento('p', `acertaste felicidades lo hicsite en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }
     else
     {
        if(numeroSecreto > numeroDeUsuario)
        {
            asignarTextoElemento('p', 'el numero es mayor');
        }
        else
        {
            asignarTextoElemento('p', 'el numero es menor');
        }
        intentos++;
        limpiarCaja();

     }
    return;

}

function limpiarCaja()
{
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';*/
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', 'juego  del numero secreto');
    asignarTextoElemento('p', `indica un numero del 01 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSeccreto();
    intentos = 1;
}

function reiniciarJuego()
 {
        limpiarCaja();
        condicionesIniciales();
        document.querySelector('#riniciar').setAttribute('disabled','true');
        
 }


function generarNumeroSeccreto() 
{
    let numeroGenerado = Math.floor(Math.random()*10)+1;


    if(listaNumeroSorteado.length == numeroMaximo)
    {
        asignarTextoElemento('p', ' Ya se sortearon todos los numero posibles');

    }
    else
    {

        if (listaNumeroSorteado.includes(numeroGenerado))
        {
            return generarNumeroSeccreto;

        }
        else 
        {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }


   // return numeroSecreto;
}

asignarTextoElemento('h1', 'juego  del numero secreto');
asignarTextoElemento('p', 'indica un numero del 1 al 10');



