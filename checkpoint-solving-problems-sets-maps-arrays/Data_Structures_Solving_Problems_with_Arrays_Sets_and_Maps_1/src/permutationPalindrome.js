function permutationPalindrome(word) {
  const letters = word.toLowerCase().split("");
  const wordMap = new Map();

  letters.forEach((letter) => {
    if (wordMap.has(letter)) {
      wordMap.set(letter, wordMap.get(letter) + 1);
    } else {
      wordMap.set(letter, 1);
    }
  });
  let count = 0;

  wordMap.forEach((value, letter) => {
    //> if the letter has an odd count
    if (value % 2 === 1) {
      count += 1;
    }
  });

  //> word is not a palindrome if there is more than one
  //> letter with an odd number of occurences
  if (count > 1) {
    return false;
  }

  //> word is not a palindrome if it has one odd letter
  //> but an even number of letters
  if (count === 1 && letters.length % 2 === 0) {
    return false;
  }

  //> word is a palindrome if it either 1) has an even number of
  //> letters (each with an even number of occurences), or has an
  //> odd number of letters, but only one letter than has an odd
  //> number of occurences
  return true;
}

module.exports = permutationPalindrome;
