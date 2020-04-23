// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  const sortedWords = sen
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    .sort((a, b) => b.length - a.length);

  let longestWord = sortedWords.filter((word, i) => {
    return sortedWords[0].length <= word.length ? word : null;
  });

  return longestWord.length === 1 ? longestWord[0] : longestWord;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const chunkedArr = [];

  arr.forEach((num) => {
    const lastItem = chunkedArr[chunkedArr.length - 1];

    if (!lastItem || lastItem.length === len) {
      chunkedArr.push([num]);
    } else {
      lastItem.push(num);
    }
  });

  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  function helper(val) {
    return val.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('');
  }
  return helper(str1) === helper(str2);
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let tempStr = str.toLowerCase().replace(/[a-z]/gi, (letter) => {
    if (letter === 'z' || letter === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(letter.charCodeAt() + 1);
    }
  });

  tempStr = tempStr.replace(/a|e|o|i|u/gi, (letter) => letter.toUpperCase());

  return tempStr;
}

// Call Function
const output = letterChanges('hello there');

console.log(output);
