let array1 = ['geroge', 'luke', 1998, 15.98, true, false, null, undefined];

console.log(array1[9]);

// array1.push('new value');
// array1.push(prompt("Enter new array value"));
array1.push("new value");

array1.pop();
array1.pop();
array1.pop();
array1.pop();

array1.shift();
array1.shift();

array1.unshift("start value", "start value 2", "start value 3");

array2 = ['Thomas', 'John', 'James', 'Luke', 'George', 'Paul', 'Ringo'];

let concatedArray = array1.concat(array2);

let slicedArray = array2.slice(2, 5);

let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

let splicedFruits = fruits.splice(2);
console.log(splicedFruits,splicedFruits.length);

console.log(array2[array2.length-1])
