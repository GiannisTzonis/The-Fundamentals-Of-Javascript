/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x) {
  let splittedArray = x.split(" ");
  let splitChar = splittedArray.map((el) => el.split(""));
  let charValue = splitChar.map((el) => {
    let counter = 0;
    el.map((element) => (counter += element.toUpperCase().charCodeAt() - 64));
    return counter;
  });
  let largest = 0;
  let largestIndex;
  for (let i = 0; i < charValue.length; i++) {
    if (charValue[i] > largest) {
      largest = charValue[i];
      largestIndex = i;
    }
  }
  return splittedArray[largestIndex];
}
