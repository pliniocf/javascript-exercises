const removeFromArray = function(arrayOfElements, ...valuesToRemove) {
  let filteredArray = [...arrayOfElements];

  valuesToRemove.forEach(value => {
    filteredArray = filteredArray.filter(element => element !== value);
  })

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
