'use strict';


function main() {
    localStorage.setItem('hello', 'world');
    localStorage.setItem('test', 123);
    let obj = {a: 10, b: false, c: [10, 20, 30]
    }

    console.log(JSON.stringify(obj)); // Convert object to JSON string
    localStorage.setItem('badData', obj);
    localStorage.setItem('goodData', JSON.stringify(obj));
    let rehydateObject = JSON.parse(localStorage.getItem('goodData')); // Retrieve the JSON string and parse it back to an object
    console.log(rehydateObject.b); // Retrieve the JSON string.b
};




main();