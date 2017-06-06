// what is stringbuilder?
const stringCompression = (str) => {
  let count = 1;
  // let char = str[0];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    // if curr differs from next
    if (str[i] !== str[i+1]) {
      // add char and count to result
      result += str[i] + count;
      // reset count
      count = 1;
    } else {
    // else
      // increment count
      count++;
    }
  }
  if (result.length < str.length) {
    return result;
  } else {
    return str;
  }
};

console.log(stringCompression('abc'));
console.log(stringCompression('aaaaaabbbbbbaccccac'));