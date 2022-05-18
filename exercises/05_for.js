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