import { sum } from './calculator/sum.js';
import { divide } from './calculator/divide.js';
import { subtract as atimtis } from './calculator/subtract.js';
import { multiply } from './calculator/multiply.js';
import { average } from './calculator/average.js';
import { power } from './calculator/power.js';

console.log(sum(4, 8));
console.log(divide(4, 8));
console.log(atimtis(4, 8));
console.log(multiply(4, 8));

console.log(average([8, 6, 'a', 2, 10]));

console.log(power(1, 1000));
console.log(power(2, 3));
console.log(power(3, 5));