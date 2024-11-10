// const { sumOfNums, filter } = require('./calculator.js');
import {  sumOfNums, filter } from './calculator.js';

console.log(sumOfNums(7, 3, '*')); 

const filteredArr = filter((num) => num > 2, [1, 2, 3, 4, 5]);
console.log(filteredArr);