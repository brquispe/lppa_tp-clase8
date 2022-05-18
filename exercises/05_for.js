/**
 * 5. For

  Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
  Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
  Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

 */

let languages = ['javaScript', 'typeScript', 'sql', 'golang', 'c++'];
for(let i = 0; i < languages.length; i++) {
  window.alert(languages[i]);
}

languages.forEach(lang => {
  lang[0] = lang[0].toUpperCase();
  window.alert(lang);
})

languages = languages.map(lang => {
  const firstCapitalLetter = lang[0].toUpperCase();
  lang = firstCapitalLetter + lang.substring(1);
  console.log(lang)
  return lang;
})

console.log('Capital: ', languages);

const sequence = [];
for(let i = 0; i < 10; i++) {
  sequence.push(i);
}
console.log(sequence);