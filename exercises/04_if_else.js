const randNum1= Math.random();
console.log(randNum1);
if (randNum1 > 0.5) {
  window.alert('Greater than 0,5');
} else {
  window.alert('Lower than 0,5');
}

const randomAge = Math.floor(Math.random() * (100 - 0) + 0);

if (randomAge >= 65) {
  window.alert('Jubilado')
} else if (randomAge >= 18) {
  window.alert('Mayor');
} else {
  window.alert('Menor');
}