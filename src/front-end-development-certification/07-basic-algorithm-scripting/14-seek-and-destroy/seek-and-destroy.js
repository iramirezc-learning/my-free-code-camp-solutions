// You will be provided with an initial array 
// (the first argument in the destroyer function),
// followed by one or more arguments. 
// Remove all elements from the initial array 
// that are of the same value as these arguments.

// my solution
function destroyer(arr) {
  let index;

  for (let i = 1; i < arguments.length; i++) {
    while ((index = arr.indexOf(arguments[i])) >= 0) {
      arr.splice(index, 1);
    }
  }

  return arr;
}

// my solution using filter
function destroyerFilter(arr) {
  const args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(e => args.indexOf(e) === -1);
}

// freeCodeCamp intermediate solution
function destroyerIntermediate(arr) {
  const args = Array.from(arguments).slice(1);
  return arr.filter(e => !args.includes(e));
}


module.exports = {
  v1: destroyer,
  v2: destroyerFilter,
  v3: destroyerIntermediate,
};