console.log("\n");
console.log("ARRAYS ALGOS");
console.log("\n");
console.log("For Loop");

const arr = [1, 2, 3, 4, 5 ,6 ,7 ,8, 3, 5 ,6 ,4 ,3 ,2 ,4 ,5 ,6 ,4 ,3 ,2 ,3 , 4/6, 7, 7 ,7, 6,5 ,43];

//iterating arrays: accessing each of the items in the array
for(let i = 0, len = arr.length; i < len; i++){
    console.log(arr[i] / 1000000, arr[i] / 99999, arr[i] * 5784, arr[i] / 9995, arr[i] / 16699);
}

console.log("\n");
console.log("While Loop");
let counter = 0;
while(counter < arr.length - 20) {
    console.log(counter/1000000);
    counter++;
}

//Another way of iterating an array
console.log("\n");
console.log("Another way of iterating an array: using 'in'");
let arr2 = ["all", "cows", "are", "big"];

for(let index in arr2){
    console.log(arr2[index]);
}

//Yet Another way
console.log("\n");
console.log("Another way of iterating an array: using 'of'");
for(let element of arr2){
    console.log(element);
}

/*
    forEach: the big difference between forEach and other iteration methods is theat
            forEach cannot break or skip certain elements in the array. forEach is 
            more expressive and explicit.
*/

console.log("\n");
console.log("forEach");
arr2.forEach((element, index) => {
    console.log(element, arr2[index]);
})

console.log("\n");
console.log("Spread Operator");
let addFourNums = (a, b, c, d) => {
    return a + b + c + d;
}

var numbers = [1, 2, 3, 4, 5];
console.log(addFourNums(...numbers));