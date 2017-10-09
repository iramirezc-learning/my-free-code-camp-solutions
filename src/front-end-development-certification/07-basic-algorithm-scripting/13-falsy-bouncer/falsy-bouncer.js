// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// my solution
function bouncer(arr) {
  return arr.filter(e => !!e);
}

// freeCodeCamp advanced solution
function bounceAdvanced(arr) {
  return arr.filter(Boolean);
}

module.exports = {
  v1: bouncer,
  v2: bouncer,
};