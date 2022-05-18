/**
 * 6. Funciones

  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
 */

const sumTwoNumbers = (numA, numB) => {
  if (isNaN(numA) || isNaN(numB)) {
    window.alert('One of the numbers is not a number');
    return NaN;
  }

  if (!Number.isInteger(numA)) {
    window.alert(numA, ' is not an integer');
    return Math.floor(numA);
  }

  if (!Number.isInteger(numB)) {
    window.alert(numB, ' is not an integer');
    return Math.floor(numB);
  }


  return numA + numB;
};

console.log(sumTwoNumbers(3, 4.3));
console.log(sumTwoNumbers('pepe', 4));