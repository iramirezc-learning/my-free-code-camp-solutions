// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// my solution
function titleCase(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// freeCodeCamp advanced solution
function titleCaseRegexp(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, word => word.toUpperCase());
}

module.exports = {
  v1: titleCase,
  v2: titleCaseRegexp,
};