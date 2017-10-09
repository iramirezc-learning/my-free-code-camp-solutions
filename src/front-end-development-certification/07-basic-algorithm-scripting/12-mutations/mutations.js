// Return true if the string in the first element of the array 
// contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true 
// because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false 
// because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true 
// because all of the letters in "line" are present in "Alien".

// my solution
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();

  return arr[1]
    .split('')
    .every(char => arr[0].indexOf(char.toLowerCase()) >= 0);
}

module.exports = {
  v1: mutation,
};