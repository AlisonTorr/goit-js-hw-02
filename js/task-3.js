const findLongestWord = function (string) {
  const words = string.split(" ");

  let longestWord = words.length[0];

  for (word of words) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
