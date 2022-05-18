/**
 * 1. Variables y Operadores

  Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
  Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
 */

const boringString = 'Lorem ipsum dolor sit';
const boringString2 = 'Lorem ipsum dolor sit amet consectetur';
const concatenatedBoringStrings = boringString + boringString2;
const stringsLength = concatenatedBoringStrings.length

console.log('First string: ', boringString);
console.log('Second string: ', boringString2);
console.log('Concatenated strings: ', concatenatedBoringStrings);
console.log('Length of both strings concatenated: ', stringsLength);
