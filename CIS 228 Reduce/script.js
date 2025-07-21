function add(a, b) {
    return a + b; // Returns the sum of a and b
}

function takeSmaller(a, b) {
    return a < b ? a : b; // Returns the smaller of a and b
}

function takeLarger(a, b) {
    return a > b ? a : b; // Returns the larger of a and b
}

function main() {
    
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let randomNumbers = [72, -96, -62, -31, 67, 97, 8, 97, -48, 40];
    
    let sum = numbers.reduce(add, 0); // Using reduce to calculate the sum of numbers from 1 to 10

    let smallest = randomNumbers.reduceArray(takeSmaller); // Using reduce to find the smallest number in randomNumbers

    let largest = randomNumbers.reduceArray(takeLarger); // Using reduce to find the largest number in randomNumbers

    console.assert(sum === 55); // Checking if the sum is equal to 55
    console.assert(smallest === -96); // Checking if the smallest number is -96
    console.assert(largest === 97); // Checking if the largest number is 97
}

main();