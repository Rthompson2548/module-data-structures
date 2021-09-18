/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  // console.log("string 1:", s1);
  // console.log("string 2:", s2);

  firstWord = new Map();
  secondWord = new Map();

  // console.log("formatting words...")

  const firstWordLowerCase = s1.toLowerCase().split("");
  // console.log("string 1 formatted:", firstWordLowerCase);

  const secondWordLowerCase = s2.toLowerCase().split("");
  // console.log("string 2 formatted:", secondWordLowerCase);

  // console.log("checking for number of sum for each letter...");

  firstWordLowerCase.forEach((letter) => {
    const sum = firstWord.get(letter);
    firstWord.set(letter, sum ? sum + 1 : 1);
  });

  // console.log("word 1 map:", firstWord);

  secondWordLowerCase.forEach((letter) => {
    const sum = secondWord.get(letter);
    secondWord.set(letter, sum ? sum + 1 : 1);
  });
  // console.log("word 2 map:", secondWord);

  for (let [key, value] of firstWord.entries()) {
    if (secondWord.get(key) !== value) return false;
    // console.log("false");
  }
  return true;
  // console.log("true");
}

module.exports = anagram;
