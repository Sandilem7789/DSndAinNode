/*
**Here I am learning Data Structures and Algorithms
**/

//Comparing floating numbers is not straight forward in javascript
console.log("\n");
console.log("****************Numbers******************");
console.log(`0.1 + 0.2 === 0.3: ${0.1 + 0.2 === 0.3} `);

//Number.EPSILON returns the smallest interval between twoo representable numbers.
//this is useful for the problem with floating-point approximation
let numberEquals = (x, y) => {
    return Math.abs(x - y) < Number.EPSILON;
}

let sum = numberEquals(0.1 + 0.2, 0.3);

console.log(`But with Number.EPSILON, 0.1 + 0.2 === 0.3: ${sum}`);
console.log("___________________________________________________");
console.log("\n");
console.log("****************Numbers: Maximums***************");

let max = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
console.log(`Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 returns: -${max}- because javascript cant go any higher than this!`);