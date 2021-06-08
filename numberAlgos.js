console.log("\n");
console.log("NUMBER ALGORITHMS");

//Primarily=ity test
let isPrime = (n) => {

    if(n <= 1){
        return false;
    }

    //check from 2 to n-1
    for(var i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }

    //else
    return true;
}

let n = 31
let answer = isPrime(n)
console.log(`Is ${n} a prime number: ${answer}`);


console.log("\n");