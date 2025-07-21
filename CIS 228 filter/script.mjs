function numberIsOdd(number) {
    if (value % 2 === 1);
}

function numberIsEven(number){
    return !numberIsOdd(number);
}

function main() {
    let numbers = [5, 10, 15, 20, 25, 30,];
    let oddNumbers = numbers.filter(numberIsOdd);
    let evenNumbers = numbers.filter(numberIsEven);
    let muliplesOfThree = numbers.filter(value => value % 3 === 0);
    let muliplesOfFour = numbers.filter(value => value % 4 === 0);
    

    console.table(numbers);
    console.table(oddNumbers);
    console.table(evenNumbers);
    console.table(muliplesOfThree);
    console.table(muliplesOfFour);
    console.table(numbers.filter(value => value % 7 === 0));

}

main();