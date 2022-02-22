// Solving problem using Frequency Counter which is solving problem with complexity O(N^2) by terminating nested loops etc.

/*
Example:- Anagram problem (Two sentence containing same occurence of alphabets as each other example->['qwerty','rewqty'])
*/

/*
Solution:- Instead of using nested loops we can use a data structures like ojects(hashmaps).
            And storing occurence of each character in objects seperatly & then matching them with each other.
            So complexity will be O(N)
*/

const validAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const firstStringCounter = {};
  const secondStringCounter = {};
  for (let char of str1) {
    firstStringCounter[char] = (firstStringCounter[char] || 0) + 1;
  }
  for (let char of str2) {
    secondStringCounter[char] = (secondStringCounter[char] || 0) + 1;
  }

  for (key in firstStringCounter) {
    if (firstStringCounter[key] !== secondStringCounter[key]) {
      return false;
    }
  }

  return true;
};

// string1 = "asa";
// string2 = "sai";

// const result = validAnagrams(string1, string2);
// console.log(result);
