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