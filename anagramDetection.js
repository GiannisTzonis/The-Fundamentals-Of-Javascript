/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

function isAnagram(word1, word2) {
    let normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
    let normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();
    let counts = [];
    let word1Length = normalizedWord1.length;
    let word2Length = normalizedWord2.length
  
    if (word1Length !== word2Length) { return false; }
  
    for ( let i = 0; i < word1Length; i++ ) {
      let index = normalizedWord1.charCodeAt(i)-97;
      counts[index] = (counts[index] || 0) + 1;
    }
  
    for (let i = 0; i < word2Length; i++) {
      let index = normalizedWord2.charCodeAt(i)-97;
      if (!counts[index]) { return false; }
      else { counts[index]--; }
    }
  
    return true;
}