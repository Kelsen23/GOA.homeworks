
const nums = [1, 2, 4, 6];
let sum = 0;

export const greet = () => {
  console.log("Hello!");
}

export const calculateAverage = () => {
  nums.map(num => {
    sum += num;
  })
  console.log(sum / nums.length);
}

