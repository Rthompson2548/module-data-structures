/**
 * Write an algorithm to check where any anagram of some string
 * is a palendrome.
 *
 * Return true if some permutation of this word is a palindrome
 * @param {string} word
 *
 * For example, given the string "acecarr", the algorithm
 * should return true, as the letters in "acecarr" can be
 * rearrange into the anagram "racecar", which itself is a
 * palendrome.
 *
 * Given the string "north", it should return false, as there
 * is no anagram of "north" that would be a palendrome
 *
 *
 * Palendrome: a word that reads the same backword as forwards
 * (i.e.: "madam", "racecar", and "nurses run")
 *
 * Anagram: a word formed by rearranging the letters of another
 * (i.e.: "cinema", formed from "iceman")
 */
function permutationPalindrome(word) {
  let letterCount = {};
  let character = [];
  let isPalendrome = false;

  console.log(`let's see if ${word} is a palendrome!`);

  let wordArray = word.toLowerCase().split("");

  console.log(
    `first, let's re-format your word so we can compare it's values...`
  );
  console.log(`formatted word: ${wordArray}`);
  console.log(
    `next, let's check how many of each letter are present in your word. if at least all but one letter has a match, then your word is a palendrome`
  );
  wordArray.forEach((letter) => {
    letterCount[letter] ? letterCount[letter]++ : (letterCount[letter] = 1);
    console.log(`${letter}: ${letterCount[letter]}`);
  });
  for (let multiples in letterCount) {
    if (letterCount[multiples] % 2) character.push(letterCount[multiples]);
  }
  //> checks if there is a max of 1 letter occuring an odd number of times
  character.length <= 1 ? (isPalendrome = true) : isPalendrome;
  console.log(`is ${word} is a palendrome?`);
  console.log(`answer: ${isPalendrome}`);

  return isPalendrome;
}

module.exports = permutationPalindrome;
