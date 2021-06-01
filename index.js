let numberEquals = (x, y) => {
    return Math.abs(x - y) < Number.EPSILON;
}

let sum = numberEquals(0.1 + 0.2, 0.3);

console.log(sum);