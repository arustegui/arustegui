let logOn = true;

function log(parametro) {
    if (logOn === true) {
        console.log(parametro);
    }
}

function init() {
    log('iniciando elementos JS');
//    const agregar = getElement('agregar');
//    agregar.addEventListener('click', agregarArticulo);
}

let saldo = 0, deposito, retiro;

function depositar() {
  deposito = document.getElementsById("deposito")[0].value;
  saldo = (saldo) + (deposito);
  verificar();
}

function retirar() {
  retiro = document.getElementsById("retirar")[0].value;
  if (isNaN(deposito)) {
    alert("Su fondo disposible no es suficiente");
  } else {
    saldo = (saldo) - (retiro);
    verificar();
  }
}

function verificar() {
  document.getElementsById("verificar")[0].value = saldo;
}

init();