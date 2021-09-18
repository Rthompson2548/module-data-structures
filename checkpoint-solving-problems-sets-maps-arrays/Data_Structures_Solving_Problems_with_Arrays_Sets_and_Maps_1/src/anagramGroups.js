/**
 * Given a list of words, group the words into anagram groups.
 * That is, place all words in the list that are anagrams of each
 * other into a group.
 *
 * For example, if the input was ['east', 'cars', 'acre', 'arcs',
 * 'teas', 'eats', 'race'], the output should be:
 * [['east', 'teas', 'eats'],
 * ['cars', 'arcs'],
 * ['acre', 'race']].
 */

function anagramGroups(words) {
  // const words = ["lemon", "melon", "ape", "pea", "are", "ear", "bear", "bare"];
  console.log("words:", words);

  let results = new Map();

  console.log("formatting all words to contain only unique letters...");
  words.forEach((word, index) => {
    word.toLowerCase();
    console.log("word", index, ":", word);

    const anagram = Array.from(word.split("")).sort().join("");
    console.log("formatted word:", anagram);

    if (results.has(anagram)) {
      results.get(anagram).push(word);
    } else {
      results.set(anagram, [word]);
    }
  });

  console.log("results map:", results);

  let resultsArray = Array.from(results.values());
  return resultsArray;
  console.log("anagrams array:", resultsArray);
}

module.exports = anagramGroups;
