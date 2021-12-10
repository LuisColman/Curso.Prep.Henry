// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
   return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.push();
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i=0; i <= array.length -1  ; i++){
    array[i]= array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    var miCadena = palabras.join(' '); 
  return miCadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var encontro = array.indexOf(elemento); 
  if (encontro){
    var noEncontro= false;
    return noEncontro;
  }else{
    var siEncontro= true;
    return siEncontro;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total=0;
  for (let i = 0; i < numeros.length; i++) {
   total+=numeros[i];
   
}
return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total=0;
  for (let i = 0; i < resultadosTest.length; i++) {
   total+=resultadosTest[i];
}
var prom=0;
prom= total / resultadosTest.length;
return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numMax=0;
  //numMax = Math.max(numeros);
  numMax=Math.max.apply(null, numeros);
  return numMax;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  

  if (arguments.length===0) {
      var miMult=0;
      return miMult;
  } 
  if (arguments.length === 1) {
    miMult = arguments[0];
     return miMult;
  } 
  var miMult=1;
  for ( var i=0 ; i < arguments.length ; i++){
    
       miMult = miMult * arguments[i];

  }
  return miMult;
}


function cuentoElementos(arreglo){  
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    var cantMayora18=0;
    for (var i=0 ; i < arreglo.length ; i++ ){
     if (arreglo[i] > 18 ){
        cantMayora18=  cantMayora18 + 1;
      }  
    }
   return cantMayora18;
  }


  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if(numeroDeDia === 1 || numeroDeDia ===7){
    var miDiaDeLaSemana= "Es fin de semana";
    }else{
    var miDiaDeLaSemana= "Es dia Laboral";
     }
    return miDiaDeLaSemana ;
  } 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
 var n1digito= parseInt(String(n)[0]);
  if (n1digito === 9 ){
   var  miEmpiezaConNueve= true;
  }else{
    var  miEmpiezaConNueve = false;

  }
return   miEmpiezaConNueve;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  //var tIgual=arreglo[0];
 //variIgual;
//  var aIgual=true;
  for ( i=1; i< arreglo.length; i++){
    //if ( tIgual !== arreglo[i]){
      if (arreglo[0] !== arreglo[i]){
      //aIgual = false;
      //return aIgual;
      return false;
    }//else{
//      aIgual= true;
 //   }

  }
  //return aIgual;
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
 var  nuevoArray = new Array();
 var j=0;
  for (i=0 ; i< array.length ; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevoArray[j]=array[i];
      j++;
    }
  }
  if (nuevoArray.length < 3){
    var mensaje="No se encontraron los meses pedidos";
    return mensaje;
  }else{
    return nuevoArray;
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var j=0;
  var miNuevoArray= new Array();
  for (i=0 ; i < array.length ; i++){
          if(array[i]>100){
            miNuevoArray[j]=array[i];
              j++;
          }
     }
     return miNuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var miArrayNuevo2=new Array();
  for ( i=0; i < 10 ; i++){
    numero = numero + 2;
    miArrayNuevo2[i]=numero;
    if (numero === i){
      miMensaje="Se interrumpió la ejecución";
      return miMensaje;
    }

  }
  return miArrayNuevo2;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var miArrayNuevo2=new Array();
  var j=0;
  for ( i=0; i < 10 ; i++){
    if (i !== 5){  
      numero = numero + 2;
      miArrayNuevo2[j]=numero;
      j++;
    }
  }
  return miArrayNuevo2;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
