function longestEvenWord(word) {
  let arrWords = word.split(" ");
  console.log(arrWords);
  let max = 0;
  let maxWord = "";

  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length % 2 == 0 && arrWords[i].length > max) {
      maxWord = arrWords[i];
      max = arrWords[i].length;
    }
  }
  return maxWord;
}

longestEvenWord("Time to write a great code");
