// given two strings check if one is a permutation of the other
// e.g. checkPermutation('abc', 'cba'); // true
// broken
const checkPermutationRecursive = function(str1, str2) {
  (subroutine = (str, index) => {
    index = index || 0;
    // find every possible combination of str1 using recursion
    // compare to str2
      // if equal return true
  })(str1);
  // return false
};

const checkPermutation = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

const checkPermutationWithHash = (str1, str2) => {
  // reduce str1 to object with counts of char
  const charCount = str1.split('').reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});
  // iterate thru str2
  for (let i = 0; i < str2.length; i++) {
    // if we don't find char in hash return false
    if (charCount[str2[i]] === undefined) {
      return false;
    } else {
      // if we find char in hash decrement count
      charCount[str2[i]]--;
    }
  }
  // iterate thru hash
  for (let char in charCount) {
    // if there is any value greater than 0
    if (charCount[char] !== 0) {
      // return false
      return false;
    }
  }
  // return true
  return true;
};

console.log(checkPermutation('abc', 'cab'));
console.log(checkPermutationWithHash('abcd', 'bcad'));