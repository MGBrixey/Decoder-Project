// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetTrue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  function substitution(input, alphabet, encode = true) {
    let convertedToLowerCase = input.toLowerCase();
    let inputArray = convertedToLowerCase.split('');
    let result = [];

    //Check if there is a substitute
    if (!alphabet) return false
    // Check if substitute is long enough
    if (alphabet.length !== 26) {
      return false;
    }

    // Check if substitute is unique
    let count = 0;
    for (let integerCheck = 0; integerCheck < alphabet.length; integerCheck++) {
      let numberAlpha = alphabet[integerCheck];
      for (let integerCheck2 = integerCheck + 1; integerCheck2 < alphabet.length; integerCheck2++) {
        let numberBeta = alphabet[integerCheck2];
        if (numberAlpha === numberBeta) {
          count++;
          break;
        }
      }
    }
    if (count > 0) {
      return false;
    }

    //IF ENCODING IS TRUE
    if(encode === true) {
      // Loop through the input and replace
      for (let integer = 0; integer < inputArray.length; integer++) {
        let selectedLetter = inputArray[integer];
        if (selectedLetter === ' ') {
          result.push(' ');
        } else {
          let numMaker = alphabetTrue.indexOf(selectedLetter);
          if (numMaker === -1) {
            // Handle characters not found in the alphabetTrue array
            result.push(selectedLetter);
          } else {
            result.push(alphabet[numMaker]);
          }
        }
      }
    return result.join('');
    }
    //IF ENCODING IS FALSE
    if(encode !== true) {
      // Loop through the input and replace
      for (let integer = 0; integer < inputArray.length; integer++) {
        let selectedLetter = inputArray[integer];
        if (selectedLetter === ' ') {
          result.push(' ');
        } else {
          let numMaker = alphabet.indexOf(selectedLetter);
          if (numMaker === -1) {
            // Handle characters not found in the alphabetTrue array
            result.push(selectedLetter);
          } else {
            result.push(alphabetTrue[numMaker]);
          }
        }
      }
    return result.join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
