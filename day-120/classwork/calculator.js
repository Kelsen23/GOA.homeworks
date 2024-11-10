export const sumOfNums = (n1, n2, op) => {
  switch (op) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      throw new Error('Invalid operator');
  }
};

export const filter = (f, arr) => {

  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;

};

// module.exports = { sumOfNums, filter };