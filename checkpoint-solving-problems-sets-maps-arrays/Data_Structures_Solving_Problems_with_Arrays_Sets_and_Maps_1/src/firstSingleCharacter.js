/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  const wordArray = word.toLowerCase().split("");
  console.log("word array: ", wordArray);
  const wordMap = new Map();
  console.log("word map: ", wordMap);

  wordArray.forEach((letter) => {
    if (wordMap.has(letter)) {
      wordMap.set(letter, wordMap.get(letter) + 1);
    } else {
      wordMap.set(letter, 1);
    }
  });
  console.log("word map: ", wordMap);

  let uniqueLetter = null;

  wordMap.forEach((value, letter) => {
    console.log("number of occurences: ", value);
    if (value === 1) {
      if (uniqueLetter === null) {
        uniqueLetter = letter;
      }
    }
  });
  return uniqueLetter;
  console.log("first single character: ", uniqueLetter);
}

module.exports = firstSingleCharacter;
