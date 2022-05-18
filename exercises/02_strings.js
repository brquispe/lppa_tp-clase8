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


