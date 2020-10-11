//take two arrays out of order then merge into one new array and sort in order.

//array.concat

let arrFirst = [3, 5, 8, 7];
let arrSecond = [4, 2, 1, 6];

let combined = arrFirst.concat(arrSecond);
combined.sort();
console.log(combined);

let arr1 = [0, 1, 2];
let arr2 = [3, 5, 7];
let primes = arr1.concat(arr2);
primes.sort();
console.log(primes);

// > [0, 1, 2, 3, 5, 7]

//spread operator

let first = ['p', 'a', 'u', 'l', 'a'];
let last = ['s', 'u', 'a', 'r','e', 'z'];
 

let name = [...first, ...last];

console.log(name);