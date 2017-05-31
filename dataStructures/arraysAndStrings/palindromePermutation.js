const palindromePermutation = (str) => {
  const letters = str.split('');
  const counts = letters.reduce((acc, curr) => {
    if (curr !== ' ') {
      if (acc[curr] === undefined) {
        acc[curr] = 0;
      }
      acc[curr]++;
    }
    return acc;
  }, {});
  // iterate thru counts
  let oddCount = 0;
  for (let count in counts) {
    // only can have one odd number
    // can have all even numbers
    // more than one odd number return false
    if (counts[count] % 2 !== 0) { // if odd
      oddCount++;
    }
  }

  // return false if oddCount > 1
  return oddCount <= 1;
};

console.log(palindromePermutation('taco cat')); // true
console.log(palindromePermutation('tco cata')); // true
console.log(palindromePermutation('racecar')); // true
console.log(palindromePermutation('racecars')); // false
console.log(palindromePermutation('aaabb'));
