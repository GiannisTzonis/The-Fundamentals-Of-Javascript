/*

Complete the solution so that the function will break up camel casing, using a space between words.

*/

// complete the function
function solution(string) {
  let newString = "";
  for (letter of string) {
    if (letter == letter.toUpperCase()) {
      newString += " ";
      newString += letter;
    } else {
      newString += letter;
    }
  }
  return newString;
}
