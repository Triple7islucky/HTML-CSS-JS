import Bicycle from './classes.js';

function main() {
    let myBike = new Bicycle(7, 'green', 'curved');
    console.log(myBike);
    console.log(`My bike has ${myBike.gears} gears, is ${myBike.color} in color, and has ${myBike.breaks} breaks.`);

    myBike.increaseSpeed(15);
    console.log(`Current speed: ${myBike.currentSpeed} km/h`);
    console.log(`Max speed: ${myBike.getMaxSpeed()} km/h`);

    let yourBike = new Bicycle();
    yourBike.gears = 21;
    yourBike.colors = 'red';
    yourBike.handlebars = 'straight';
    console.log(`Your bike has ${yourBike.gears} gears, is ${yourBike.color} in color, and has ${yourBike.breaks} breaks.`);
    console.log(`Max speed: ${yourBike.getMaxSpeed()} km/h`);
}

main();