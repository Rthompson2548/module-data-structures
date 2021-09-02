function anagram(s1, s2) {
  firstWord = new Map();
  secondWord = new Map();

  const firstWordLowerCase = s1.toLowerCase().split("");
  const secondWordLowerCase = s2.toLowerCase().split("");

  firstWordLowerCase.forEach((letter) => {
    const sum = firstWord.get(letter);
    firstWord.set(letter, sum ? sum + 1 : 1);
  });
  secondWordLowerCase.forEach((letter) => {
    const sum = secondWord.get(letter);
    secondWord.set(letter, sum ? sum + 1 : 1);
  });

  //* equality check
  for (let [key, value] of firstWord.entries()) {
    if (secondWord.get(key) !== value) return false;
    console.log("false");
  }

  return true;
  console.log("true");
}

module.exports = anagram;
