// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

// my recursive solution
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }

  return str + repeatStringNumTimes(str, num - 1);
}

// my iterative solution
function repeatStringNumTimesIterative(str, num) {
  let output = '';

  for (let i = 0; i < num; i++) {
    output += str;
  }

  return output;
}

// freeCodeCamp advanced version
function repeatStringNumTimesAdvanced(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

module.exports = {
  v1: repeatStringNumTimes,
  v2: repeatStringNumTimesIterative,
  v3: repeatStringNumTimesAdvanced,
};