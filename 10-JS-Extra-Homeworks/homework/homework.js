// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí

    var array = new Array;
      
    for (let clave in objeto) {
        array.push([clave, objeto[clave]])  
        }
        return array;

    }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj ={};
  //var c;
  //var array = new Array;
  //var cadena = string.split();
    for (let i = 0; i < string.length; i++) {
     if (obj.hasOwnProperty(string[i])){
      
      obj[string[i]] = obj[string[i]] + 1;

     }else obj[string[i]]=1;

    }
    return obj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var arr= new Array;
  var min = new Array;

  for (let i = 0; i < s.length; i++) {
    if ( esMayuscula(s[i] )){
      arr.push(s[i])
    } else{min.push(s[i])} 
  }
  return arr.concat(min).join('');
}
function esMayuscula(letra)
  {
      return letra === letra.toUpperCase();
  }
console.log(capToFront('soyHENRY'))
 

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se 
  //pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //.split(' ')= [The,Henry,Challenge,is,close!] *se convierte en array para utilizar los metodos map,reverse, etc
  //.map = [T,h,e]
  //.reverse => [e,h,T]
  //.join =>"ehT"
  var inv = str.split(' ').map(function(elemento){
   return elemento.split('').reverse().join('') //return del map
  })
    return inv.join(' ')// devuelve cada elemento separado por un espacio
  }

 console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cap = numero.toString();
  var inv = cap.split('').reverse().join('')

  if (cap===inv) {
    return 'Es capicua';
  } else { 
    return 'No es capicua';
  }  
}
console.log(capicua(3443));


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena='';
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c" ){
       nuevaCadena += cadena[i];
    }
  };
  return nuevaCadena;
}
console.log(deleteAbc('abcunoabcdos'));

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var aux = '';
  var bandera = true;
  while (bandera) {
    bandera = false;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i].length > arr[i+1].length){
        aux = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=aux;
        bandera=true;
      }
      
    } 
  }
return arr;
/*var aux2 = '';
array=[];
for (let i = 1; i < arr.length; i++) {
  if (arr[i-1].length > arr[i].length) {
     array.push(arr[i-1])
  } else {
    array.push(arr[i])
  };
  
}
return array;
*/
}
console.log(sortArray(["You", "are", "beautiful", "looking"]))


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. 
  //(Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var arr = [];
for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i]===arreglo2[j]){
        arr.push(arreglo1[i])
      }      
    }
  
}
return arr;

}
console.log(buscoInterseccion([4,2,7,3], [1,7,3,4,8]))



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

