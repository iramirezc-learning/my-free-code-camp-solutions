// Return the remaining elements of an array 
// after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// my solution
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

module.exports = {
  v1: slasher,
};