let logOn = true;
const articulos = [];

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

function init() {
    log('iniciando elementos JS');
    const agregar = getElement('agregar');
    agregar.addEventListener('click', agregarArticulo);
}

function agregarArticulo() {
    const input = getElement('inputArticulo');
    const valor = input.value;
    log(`El valor es ${valor}`);
    articulos.push(valor);
    agregarFila(valor);
    
}

function agregarFila(valor) {
    log(`agregar la variable ${valor}`);
}

init();



