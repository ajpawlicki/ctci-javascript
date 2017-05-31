const swap = (str, i, j) => {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
};

const uRLify = (str) => {
  // loop thru str
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      for (let t = str.length - 1; t >= i + 2; t--) {
        swap(str, t, t - 2);
      }
      str[i] = '%';
      str[i+1] = '2';
      str[i+2] = '0';
    }
  }
  return str.join('');
};

console.log(uRLify('hello world there    '));

const uRLifyLinear = (str) => {
  const arrayStr = str.split('');
  const trueLength = str.trim().length;
  let index = str.length - 1;
  for (i = trueLength - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      arrayStr[index] = '0';
      arrayStr[index-1] = '2';
      arrayStr[index-2] = '%';
      index -= 3;
    } else {
      arrayStr[index] = str[i];
      index--;
    }
    // console.log(str[i]);
    // console.log(arrayStr);
  }
  return arrayStr.join('');
};

console.log(uRLifyLinear('hello world  '));
console.log(uRLifyLinear('hello world there    '));

const uRLifyForwards = (str) => {
  const arrayStr = str.split('');
  const trueLength = str.trim().length;
  let index = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === ' ') {
      arrayStr[index] = '%';
      arrayStr[index+1] = '2';
      arrayStr[index+2] = '0';
      index += 3;
    } else {
      arrayStr[index] = str[i];
      index++;
    }
  }
  return arrayStr.join('');
};

console.log(uRLifyForwards('hello world what'));