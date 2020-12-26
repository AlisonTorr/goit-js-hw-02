const findLongestWord = function (string) {
  const words = string.split(" ");

  let longestWord = words[0].length;

  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
