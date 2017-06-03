// insert, remove, or replace a char
const oneAwayBroken = (str1, str2) => {
  // check if str lengths are same
  // find longer string
  const longerString = str1.length >= str2.length ? str1 : str2;
  const shorterString = str1.length >= str2.length ? str2 : str1;
  // return false if length difference is greater than 1
  if (longerString.length - shorterString.length > 1) {
    return false;
  }
  // reduce shorter string to hash table count
  let shorterStringCharCounts = shorterString.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});
  let edits = 0;
  // iterate thru longer string
  for (let i = 0; i < longerString.length; i++) {
    if (shorterStringCharCounts[longerString[i]] > 0) {
      shorterStringCharCounts[longerString[i]]--;
    } else {
      edits++;
    }
  }
  // iterate thru shorter string hash table
  for (let char in shorterStringCharCounts) {
    if (shorterStringCharCounts[char] > 0) {
      edits++;
    }
  }
  console.log(edits);
  return edits <= 1;
};

// insert remove or replace a char
const oneAway = (str1, str2) => {
  // check if str lengths are same
  // find longer string
  const longerString = str1.length >= str2.length ? str1 : str2;
  const shorterString = str1.length >= str2.length ? str2 : str1;
  // return false if length difference is greater than 1
  if (longerString.length - shorterString.length > 1) {
    return false;
  }
  // while loop two indeces
  let i = j = 0;
  let foundDiff = false;
  while (i < longerString.length || j < shorterString.length) {
    if (longerString[i] !== shorterString[j]) {
      if (foundDiff) {
        return false;
      }
      foundDiff = true;
      // on replace move shorter
      if (longerString.length === shorterString.length) {
        j++;
      }
    } else {
      j++;
    }
    i++;
  }
  return true;
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('bale', 'ple')); // false
console.log(oneAway('bale', 'pale')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('bake', 'pale')); // false
console.log(oneAway('pale', 'pales')); // true
console.log(oneAway('spale', 'pale')); // true