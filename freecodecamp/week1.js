function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32
  return fahrenheit;
}

convertToF(30);


function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");


function factorialize(num) {	
  return num === 0 ? 1 : num * factorialize(num -1);
}

factorialize(5);


function findLongestWordLength(str) {
  let longest;
  const words = str.split(' ').sort((a, b) => b.length - a.length)
  longest = words[0]
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


function largestOfFour(arr) {
  let largest =[]
  arr.forEach(numbers => {
    largest.push(numbers.sort((a,b) => b-a)[0])
  })
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function confirmEnding(str, target) {
  return str.substr(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  return num > 0 ?  str + repeatStringNumTimes(str, num-1) : "";
}

repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
  return num === str.length || num > str.length ? str : str.substr(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


function findElement(arr, func) {
  return arr.find(func)
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

function booWho(bool) {
  return typeof bool === "boolean" ;
}

booWho(null);

