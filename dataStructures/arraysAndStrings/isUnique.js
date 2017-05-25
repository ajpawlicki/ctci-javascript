const isUnique = (str) => {
  const sortedString = str.split('').sort(); // O(n*logn)
  // iterate thru sorted string
  for (let i = 0; i < sortedString.length; i++) {
    // if anything next to element is the same
    if (sortedString[i-1] === sortedString[i] || sortedString[i+1] === sortedString[i]) {
      // return false
      return false;
    }
  }
  return true
};

function isUniqueUsingHash(str) {
  const hashTable = {};
  for (let char of str) {
    if (hashTable[char] !== undefined) {
      return false;
    }
    hashTable[char] = true;
  };
  return true;
};

console.log(isUnique('abcdefghijklmnopqrstuvwxyz1'));