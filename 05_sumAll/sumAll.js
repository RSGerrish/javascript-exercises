const sumAll = function(start, end) {
  let finalSum = 0;

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  } else if (start < 0 || end < 0) {
    return "ERROR";
  }else if (start - end < 0) {
    for (i = start; i <= end; i++) {
      finalSum += i;
    }
  } else if (start - end > 0) {
    for (i = start; i >=end; i--) {
      finalSum += i;
    }
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
