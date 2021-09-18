/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 *
 * Given a string, find the first character in that string that occurs
 * only once. For example, given the string "thinkful" return the character
 * "t" since that is the first character in the string that is not repeated
 * in the string.
 */
function firstSingleCharacter(word) {
  console.log(`let's find the first letter in ${word} that only occurs once!`);

  let wordArray = word.toLowerCase().split("");
  console.log(`re-formatting word...`);

  let letterCount = {};
  let firstSingleLetter = null;

  console.log(`checking ${word} to find unique letters...`);
  wordArray.forEach((letter) => {
    letterCount[letter] ? letterCount[letter]++ : (letterCount[letter] = 1);
  });

  console.log(`finding first single letter in ${word}...`);
  for (let singleLetter in letterCount) {
    if (letterCount[singleLetter] === 1) {
      firstSingleLetter = singleLetter;
      break;
    }
  }
  console.log(`the first single letter in your word is: ${firstSingleLetter}`);
  return firstSingleLetter;
}

module.exports = firstSingleCharacter;
