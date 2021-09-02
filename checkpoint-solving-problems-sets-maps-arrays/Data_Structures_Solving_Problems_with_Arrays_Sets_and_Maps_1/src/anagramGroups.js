/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const results = new Map();

  words.forEach((word) => {
    const lowerCaseWord = word.toLowerCase().split("").sort().join("");
    console.log("lower case word: ", lowerCaseWord);

    const group = results.get(lowerCaseWord);
    console.log("word group: ", group);

    results.set(lowerCaseWord, group ? [...group, word] : [word]);
  });

  const anagram = Object.fromEntries(results);
  console.log("anagram: ", anagram);

  const sameLetters = Object.values(anagram);

  console.log("words with same letters: ", sameLetters);
  return sameLetters;
}

module.exports = anagramGroups;
