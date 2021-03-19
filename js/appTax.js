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

function masIva(precio, iva){
    let = iva || 21
    let coniva = (precio + precio*iva/100);
    return coniva;
  }
  let precio = parseInt(prompt("Introduce un precio")); 
  let iva = parseInt(prompt("Introduce el iva"));
  if(iva > 0){
    let resultado = masIva(precio, iva);
  }
  else{
    let resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);