/**
 * 3. Arrays

  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
  Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
  Agregar un elemento al principio y al final del array (utilizar unshift y push).
  Quitar un elemento del principio y del final del array (utilizar shift y pop).
  Invertir el orden del array (utilizar reverse).
  Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
  Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes en la posición 5: ', meses[5]);
console.log('Mes en la posición 11: ', meses[11]);

const sortedMeses = meses.slice().sort();
console.log('Meses ordenados: ', sortedMeses);
meses.unshift('Prenero');
console.log('Nuevo mes agregado antes de enero: ', meses[0]);
meses.push('Undiciembre');
console.log('Nuevo mes agregado después de diciembre: ', meses[meses.length - 1])

meses.shift();
meses.pop();
console.log('Meses sin los nuevos: ', meses);

const reverseMeses = meses.slice().reverse();
console.log('Meses al revés: ', reverseMeses);

const mesesString = meses.join('-');
console.log('Meses en string: ', mesesString);

const mesesMayoANoviembre = meses.slice(meses.indexOf('Mayo'), meses.indexOf('Noviembre'));
console.log('Meses de mayo a noviembre (no inclusive):', mesesMayoANoviembre);