// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
// because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 
// because once the array has been sorted it will look like [3,5,20] 
// and 19 is less than 20 (index 2) and greater than 5 (index 1).

// my solution
function getIndexToIns(arr, num) {
  for (let i = 0, len = arr.sort((a, b) => a > b).length; i < len; i++) {
    if (num > arr[i]) {
      continue;
    }
    return i;
  }

  return arr.length;
}

// my solution 2
function getIndexToInsWhile(arr, num) {
  let i = -1;

  arr.sort((a, b) => a > b);

  while (num > arr[++i]);

  return i;
}

// freeCodeCamp basic solution
function getIndexToInsBasic(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

// freeCodeCamp basic solution 2
function getIndexToInsBasic2(arr, num) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  }

  return count;
}

// freeCodeCamp intermediate solution
function getIndexToInsIntermediate(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

// freeCodeCamp advanced solution
function getIndexToInsAdvanced(arr, num) {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

module.exports = {
  v1: getIndexToIns,
  v2: getIndexToInsWhile,
  v3: getIndexToInsBasic,
  v4: getIndexToInsBasic2,
  v5: getIndexToInsIntermediate,
  v6: getIndexToInsAdvanced,
};