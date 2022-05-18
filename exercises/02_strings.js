/**
 * 2. Strings

  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

 */

const firstString = 'Lorem ipsum dolor sit amet';
const firstFiveChars = firstString.substring(0, 5);
console.log('First string: ', firstString);
console.log('First five characters: ', firstFiveChars);

const secondStringg = "lorem ipsum dolor sit";
const firstCapitalLetter = secondStringg.substring(0, 1).toUpperCase() + secondStringg.substring(1).toLowerCase();
console.log('Second string: ', secondStringg);
console.log('First letter to capital: ', firstCapitalLetter);

const thirdString = "Lorem, ipsum dolor";
const indexOfFirstSpace = thirdString.indexOf(' ');
console.log('Third string: ', thirdString);
console.log('Index of first space: ', indexOfFirstSpace);


