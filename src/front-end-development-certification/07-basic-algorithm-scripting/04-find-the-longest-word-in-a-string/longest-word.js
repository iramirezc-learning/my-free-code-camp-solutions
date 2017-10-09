// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// my solution
function findLongestWord(str) {
  return Math.max.apply(null, str.split(' ').map(word => word.length));
}

// freeCodeCamp intermediate solution
function findLongestReduced(str) {
  return str.split(' ').reduce((lastMax, word) => Math.max(lastMax, word.length), 0);
}

// freeCodeCamp advanced solution
function findLongestRecursive(str) {
  str = str.split(' ');

  if (str.length === 1) {
    return str[0].length;
  }

  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestRecursive(str.join(' '));
  }

  return findLongestRecursive(str.slice(1).join(' '));
}

module.exports = {
  v1: findLongestWord,
  v2: findLongestReduced,
  v3: findLongestRecursive,
};