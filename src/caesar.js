// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input, shift, encode = true) {
    if (!shift) return false;
    if (shift > 25 || shift < -25) return false;
    if (shift === 0) return false;

    let convertedToLowerCase = input.toLowerCase();
    let inputArray = convertedToLowerCase.split('');
    let result = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newPos;
      for (let integer = 0; integer < inputArray.length; integer++) {
          let selectedLetter = inputArray[integer];
          //If not a letter
          if (!alphabet.includes(selectedLetter)) {
              result.push(selectedLetter);
          }
          if (alphabet.includes(selectedLetter)) {            
            //Otherwise check for letter position
            for (let integer2 = 0; integer2 < alphabet.length; integer2++) {
              let checkingLetter = alphabet[integer2];
              if (checkingLetter === selectedLetter) {
                //Check if encoding or decoding
                if (encode === true) {
                  newPos = integer2 + shift;
                }
                if (encode !== true) {
                  newPos = integer2 - shift;
                }
                  //Going Before 'a'
                  if (newPos < 0) {
                    newPos += 26;
                  }
                  //Going After 'z'
                  if (newPos > 25) {
                    newPos = newPos -26;
                  }
              }
            }
            result.push(alphabet[newPos]);
        }
      }
    return result.join('');
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
