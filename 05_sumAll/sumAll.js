const sumAll = function(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || n1 < 0 || n2 < 0) return 'ERROR';

  let sum = 0;
  let biggerNumber = n1 > n2 ? n1 : n2;

  for (let i = n1 > n2 ? n2 : n1; i <= biggerNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
