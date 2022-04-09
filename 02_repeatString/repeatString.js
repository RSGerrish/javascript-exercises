const repeatString = function(str, n) {
  let returnStr = "";

  if (n < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < n; i++) {
      returnStr += str;
    }
  }

  return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
