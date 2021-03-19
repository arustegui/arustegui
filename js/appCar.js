console.log('Web Code noob Aru iniciada 2.0');

let logOn = true;

function log(parametro) {
    if (logOn === true) {
        console.log(parametro);
    }
}

function getElement(id) {
    return document.getElementById(id);
}

function getValue(id) {
    const element = getElement(id);
    return element.value;
}

const inputMarca = getElement('marcaCarro');
const inputModelo = getElement('modeloCarro');


function init() {
    log('iniciando elementos');
    const btnLargo = getElement('btnLargo');
    const button = getElement('button');
    btnLargo.addEventListener('click', large);
    const btnAutos = getElement('btnAutos');
    btnAutos.addEventListener('click', autos);
}

function large() {
    const contadorMarca = getElement('contadorMarca');
    const marca = contadorMarca.value;
    const mostrar = getElement('mostrarTexto');
    mostrar.innerHTML = marca.length;

}

function autos() {
    log('Ejecutando Autos');
    let marca = inputMarca.value;
    let modelo = inputModelo.value;
    let descuento = 0;
    let mensajeAutos = getElement('mensajeAutos');

    // validacion
    if (marca == '') {
        log('No escribio marca');
        inputMarca.focus();
        return;
    } 
    
    // logica descuento 
    if (marca == "ford" && modelo == "fiesta") {
        descuento = 10;
    }

    if (marca == "nissan" && modelo == "skyline") {
        descuento = 15;
    }

    if (descuento == 0) {
       mensajeAutos.innerHTML = `Tenes descuento ${descuento}`;
       inputMarca.value = '';
       inputModelo.value = '';

    } else {
        mensajeAutos.innerHTML = `Este es el descuento ${descuento} de este modelo de auto`;
    }

}

init();