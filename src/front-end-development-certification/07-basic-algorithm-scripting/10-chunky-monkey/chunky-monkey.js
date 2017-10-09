// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

// my solution
function chunkArrayInGroups(arr, size) {
  const chunks = [];

  for (let i = 0, len = arr.length; i < len; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

// freeCodeCamp advanced solution
function chunkArrayInGroupsAdvanced(arr, size) {
  const chunks = [];
  let i = 0;

  while (i < arr.length) {
    chunks.push(arr.slice(i, i + size));
    i += size;
  }

  return chunks;
}

// freeCodeCamp advanced solution 2
function chunkArrayInGroupsAdvanced2(arr, size) {
  const chunks = [];

  while (arr.length) {
    chunks.push(arr.splice(0, size));
  }

  return chunks;
}

module.exports = {
  v1: chunkArrayInGroups,
  v2: chunkArrayInGroupsAdvanced,
  v3: chunkArrayInGroupsAdvanced2,
};