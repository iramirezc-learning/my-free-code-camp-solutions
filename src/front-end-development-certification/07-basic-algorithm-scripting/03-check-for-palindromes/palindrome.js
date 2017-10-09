// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, 
// ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
// and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


// Recursive
function palindromeRecursive(str) {
  if (str.length <= 1) {
    return true;
  }

  str = str.replace(/\W|_/g, '').toLowerCase();

  const lastIndex = str.length - 1;

  if (str.charAt(0) !== str.charAt(lastIndex)) {
    return false;
  }

  return palindromeRecursive(str.substring(1, lastIndex));
}

// Reversed
function palindromeReversed(str) {
  str = str.replace(/\W|_/g, '').toLowerCase();

  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

// For Loop
function palindromeForLoop(str) {
  str = str.replace(/\W|_/g, '');

  for (let i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i].toLowerCase() !== str[len - i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

// While Pointers
function palindromeWhileLoop(str) {
  let init = 0;
  let last = str.length - 1;
  const regex = /[\W_]/;

  while (last > init) {
    // ignore invalid chars form the left
    while (regex.test(str[init])) {
      init++
    }

    // ignore invalid chars from the right
    while (regex.test(str[last])) {
      last--;
    }

    if (str[init].toLowerCase() !== str[last].toLowerCase()) {
      return false;
    }

    init++;
    last--;
  }

  return true;
}

// freeCodeCamp version (most performant solution)
function palindromeCodeCamp(str) {
  let front = 0;
  let back = str.length - 1;

  while (back > front) {
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }

    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false
    }

    front++;
    back--;
  }

  return true;
}

module.exports = {
  v1: palindromeRecursive,
  v2: palindromeReversed,
  v3: palindromeForLoop,
  v4: palindromeWhileLoop,
  v5: palindromeCodeCamp,
};