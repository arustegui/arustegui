let logOn = true;

function log(parametro) {
    if (logOn === true) {
        console.log(parametro);
    }
}

function getElement(id){
    return document.getElementById(id);
}

function getValue(id){
    const element =  getElement(id);
    return element.value;
}

function masIva(precio, iva, taxUno, taxDos){
  let iva = 21;
  let taxUno = 30;
  let taxDos = 35;
  let coniva = (precio + taxUno * iva / 100);
  return coniva;
  }

  let precio = ("Introduce un precio")); 
  let iva = ("Introduce el iva"));
  if (iva > 0) {
  let resultado = masIva(precio, iva);
  }
  else {
  let resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("Precio más Iva: " + resultado);  