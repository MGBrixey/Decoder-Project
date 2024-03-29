// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const cipher = [
    { letter: 'a', number: 11 },
    { letter: 'b', number: 21 },
    { letter: 'c', number: 31 },
    { letter: 'd', number: 41 },
    { letter: 'e', number: 51 },
    { letter: 'f', number: 12 },
    { letter: 'g', number: 22 },
    { letter: 'h', number: 32 },
    { letter: '(i/j)', number: 42 },
    { letter: 'i', number: 42 },
    { letter: 'j', number: 42 },
    { letter: 'k', number: 52 },
    { letter: 'l', number: 13 },
    { letter: 'm', number: 23 },
    { letter: 'n', number: 33 },
    { letter: 'o', number: 43 },
    { letter: 'p', number: 53 },
    { letter: 'q', number: 14 },
    { letter: 'r', number: 24 },
    { letter: 's', number: 34 },
    { letter: 't', number: 44 },
    { letter: 'u', number: 54 },
    { letter: 'v', number: 15 },
    { letter: 'w', number: 25 },
    { letter: 'x', number: 35 },
    { letter: 'y', number: 45 },
    { letter: 'z', number: 55 },
  ];

  function polybius(input, encode = true) {
    let convertedToLowerCase = input.toLowerCase();
    let inputArray = convertedToLowerCase.split('');
    let result = [];

    if (encode === true) {
      for (let integer = 0; integer < inputArray.length; integer++) {
        let selectedLetter = inputArray[integer];

        if (selectedLetter === ' ') {
          result.push(' ');
        } else {
          let cipherMatched = cipher.find((element) => element.letter === selectedLetter);
          if (cipherMatched) {
            result.push(cipherMatched.number);
          }
        }
      }
      return result.join('');
    }

    if (encode !== true) {
      let checker = input.replace(' ', '');

      // Check for odd input length (excluding spaces)
      if (checker.length % 2 !== 0) {
        return false;
      }

      let numMaker = '';
      for (let integer = 0; integer < inputArray.length; integer++) {
        let selectedCharacter = inputArray[integer];
        if (selectedCharacter === ' ') {
          result.push(' ');
        } else {
          numMaker += selectedCharacter;

          // Handle '42' case
          if (numMaker === '42') {
            result.push('(i/j)');
            numMaker = '';
          } else if (numMaker.length === 2) {
            let cipherMatched = cipher.find((element) => element.number === parseInt(numMaker));
            if (cipherMatched) {
              result.push(cipherMatched.letter);
            }
            numMaker = '';
          }
        }
      }
      return result.join('');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
