const repeatString = function(theString, numberOfTimes) {
  if (numberOfTimes < 0) return 'ERROR';
  
  let finalString = '';
  for (let i = 0; i < numberOfTimes; i++)
    finalString += theString;

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
