function double(a) {
    return a * 2;
}

function triple(a) {
    return a * 3;
}

Array.prototype.transformArray = function (callback){
    let newArray = [];

    this.forEach((value) => {
        newArray.push(callback(value));
    });

    return newArray;
}

function main() {

    let numbers = [10, 20, 30, 40];
    let doubledNumbers = numbers.map(double);
    let tripledNumbers = numbers.map(function (a) {
        return a * 3;
    });

    console.table(numbers);
    console.table(doubledNumbers);
    console.table(tripledNumbers);
}

main();