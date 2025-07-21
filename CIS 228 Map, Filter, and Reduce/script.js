function isNonNegative(value) {
    return value > 0;
}

function double(value) {
    return value * 2;
}

function sum(a, b) {
    return a + b;
}

function main() {
    let numbers = [-20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30];
    let total = numbers
                .filter(isNonNegative)
                .map(double)
                .reduce(sum, 0);
    console.log(total);
}

main();