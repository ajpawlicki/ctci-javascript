// isSubstring method checks if one word is substring of another
// given two strings check if str2 is rotation of str1 using only one call to isSubstring
// waterbottle erbottlewat
const stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const doubleStr2 = str2 + str2;
  return doubleStr2.includes(str1);
  // return doubleStr2.indexOf(str1);
  // return isSubstring(str1, doubleStr2);
};

const isSubstring = (str1, str2) => {
  const longer = str1.length >= str2.length ? str1 : str2;
  const shorter = str1.length >= str2.length ? str2 : str1;
  // count number of times first letter of shorter in longer
  let count = 0;
  for (let i = 0; i < longer.length; i++) {
    if (longer[i] === shorter[0]) {
      count++;
    }
  }
  // iterate thru longer
  for (let i = 0; i < longer.length; i++) {
    if (count === 0) return false;
    // if matches first letter of shorter
    if (longer[i] === shorter[0]) {
      // debugger;
      // iterate thru shorter
      for (let j = 1; j < shorter.length; j++) {
        // check if shorter matches with next letter
        if (shorter[j] !== longer[i+j]) {
          // if not decremenent count and break
          count--;
          break;
        }
      }
    }
  }
  return true;
};

console.log(isSubstring('wwater', 'awwaterbottle'));
console.log(stringRotation('waterbottles', 'bottleswater'));
console.log(stringRotation('everybody', 'bodyevery'));
console.log(stringRotation('a', 'b'));