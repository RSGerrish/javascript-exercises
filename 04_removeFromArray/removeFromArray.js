function removeFromArray(arrayToCheck, ...argsToRemove) {  
  let returnArray = arrayToCheck.filter(arr => !argsToRemove.includes(arr));

  console.log(returnArray);
  return returnArray;
}

// Do not edit below this line
module.exports = removeFromArray;
