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

function init() {
    log('iniciando elementos JS');
}

const inputArt = getElement('inputArt');

function tabla() {
    const btn = getElement('btn');
    btn.addEventListener('click', consola);
    const arrayArt = [];
    console.log('consola');
} 



// function artArrayInput(){
//     const arrayInput = new Array();
//     const inputValue = document.getElementById('artInput');
//         artValues = [].array.forEach(inputValue, function(dataInput) {
//          arrayInput.push(dataInput.value);
//      });
//      return;
// }

// -- DATE --
// function date(){
//     const fecha = new Date();
//     document.getElementById("date").innerHTML = fecha;
// }

init ();

