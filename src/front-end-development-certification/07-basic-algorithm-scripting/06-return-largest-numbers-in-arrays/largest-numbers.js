// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, 
// and access each member with array syntax arr[i].

// my solution
function largestOfFour(arr) {
  return arr.map(subarr => Math.max.apply(null, subarr));
}

// freeCodeCamp advanced solution
function largestOfFourAdvanced(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

module.exports = {
  v1: largestOfFour,
  v2: largestOfFourAdvanced,
};