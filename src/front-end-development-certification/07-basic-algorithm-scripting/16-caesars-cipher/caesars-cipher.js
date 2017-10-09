// One of the simplest and most widely known ciphers is a Caesar cipher, 
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.

// my solution
function rot13(str) { // LBH QVQ VG!
  const first = 'A'.charCodeAt(0); // 65
  const last = 'Z'.charCodeAt(0) + 1; // 91
  const steps = 13;

  return str.split('').map(char => {
    if (/\w/.test(char)) {
      let code = char.charCodeAt(0) - steps;

      if (code < first) {
        code = last - (first - code);
      }

      return String.fromCharCode(code);
    }
    return char;
  }).join('');
}

// freeCodeCamp basic solution
function rot13Basic(str) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    if (code < 65 || code > 90) {
      return char;
    }

    if (code < 78) {
      return String.fromCharCode(code + 13);
    }

    return String.fromCharCode(code - 13);
  }).join('');
}

// freeCodeCamp intermediate solution
function rot13Intermediate(str) {
  return String.fromCharCode.apply(null, str.split('')
    .map(char => {
      if (/[A-Z]/.test(char)) {
        return char.charCodeAt() % 26 + 65;
      }
      return char.charCodeAt();
    })
  );
}

// freeCodeCamp advanced solution
function rot13Advanced(str) {
  return str.replace(/[A-Z]/g, char => String.fromCharCode(char.charCodeAt() % 26 + 65));
}

module.exports = {
  v1: rot13,
  v2: rot13Basic,
  v3: rot13Intermediate,
  v4: rot13Advanced,
};