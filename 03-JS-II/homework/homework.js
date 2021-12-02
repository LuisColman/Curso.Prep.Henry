// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x === y){
    var numIgual = x ;
    return numIgual;
  }else if (x > y){
    var numMayorx= x ;
    return numMayorx;
  }else{
    var numMayory= y ;
    return numMayory;
  } 
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18){
    var mayor= "Allowed";
    return mayor;
  }else{
    var mayorN= "Not allowed";
    return mayorN;
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch(status) {
    case 1:
      var usuOnline="Online";
      return usuOnline;
      break;
    case 2:
      var usuAway="Away";
      return usuAway;
      break;
    default:
      var usuOffline="Offline";
      return usuOffline;
  }

}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma){
    case "aleman":
      var miidioma= "Guten Tag!";
      return miidioma;
      break;
      case "mandarin":
      var miidioma= "Ni Hao!";
      return miidioma;
      break;
      case "ingles":
      var miidioma= "Hello!";
      return miidioma;
      break;

      default:
      var miidioma= "Hola!";
      return miidioma;
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
    case "blue":
      var micolor="This is blue";
      return micolor;
      break;
    case "red":
       var micolor="This is red";
       return micolor;
       break;
    case "green":
      var micolor="This is green";
      return micolor;
      break;
    case "orange":
      var micolor="This is orange";
      return micolor;
      break;
    default:
      var micolor="Color not found";
      return micolor;
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero ===5){
    var minro=true;
    return minro;
  }else{
    var minro=false;
    return minro;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero > 20 && numero < 50 ){
    var minro1=true;
    return minro1;
  }else{
    var minro1=false;
    return minro1;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === 0){
    var esCero=true;
    return esCero;
  }else {
  if ( numero % Math.floor(numero) === 0){
  var esInt=true;
  return esInt;
  }else  {
   var esIntNot=false;
   return esIntNot;
  }
}
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  
  if   (numero % 3 === 0 && numero % 5 === 0 )  {
        var minumes="fizzbuzz";
  	    return minumes;
  } else if (numero % 3 === 0) {
        var minumes="fizz";
        return minumes;
  } else if (numero % 5 === 0) {
        var minumes="buzz";
  	    return minumes;
  } else{
    var minumes = numero;
  	return minumes;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 === 0 || num2 === 0 ||num3 === 0 ) {
       var esCero="Error";
       return esCero;
  } else if (num1 < 0 || num2 < 0 ||num3 < 0 ){
       var esNegativo="Hay negativos";
       return esNegativo; 
  } else if  (num1 >  num3 &&  num1 >  num2  ){
       var num1Mayor="Número 1 es mayor y positivo";
       return num1Mayor;
  } else if(num3 > num2){
        num3 += 1 ;
        return num3;
  }else{
    var mifalse=false;
    return mifalse;   
  }

  

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var cont=0;
  if (numero === 0 || numero === 1 || numero === 2){
      var es_no_EsPrimo= false ;
    //console.log ("si es falso no es primo");
    return es_no_EsPrimo;
    }
  for (var x = 1; x <= numero ; x++){ 
    if (numero % x === 0){
      cont++;	
      //console.log (cont);
     // return es_no_EsPrimo;
  }else {
      var es_no_EsPrimo= true  }
  }
  if (cont>2){
      es_no_EsPrimo= false;
     //console.log (es_no_EsPrimo);
      //console.log ("porcontador");
      return es_no_EsPrimo;
  }else{
         //console.log (es_no_EsPrimo);
         return es_no_EsPrimo;
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
if (valor === true){
  var siSoyVerdadero="Soy verdadero";
  return siSoyVerdadero;
} else {
  var siSoyFalso="Soy falso";
  return siSoyFalso;
}
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  var miTablaMult = new Array();
  for(var i=0; i <= 10; i++){
    miTablaMult[i] = (6 * i) ;
  }
  return miTablaMult;
  }

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
if (numero.toString().length === 3){
  var siTiene3=true;
  return siTiene3;
}else{
  var noTiene3=false;
  return noTiene3;
}
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //var numero=0; 
  var i=0;
    do {
      i ++;
      numero = numero + 5;
    } while (i <= 7);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
