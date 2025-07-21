'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let timeOne = Math.floor(Math.random() * 1000);
    let timeTwo = Math.floor(Math.random() * 1000);


    function chooseGreeting(cb){
        setTimeout(() => {
            const greetings = ['Hello', 'Hola', 'Konnichiwa', 'Bonjour', 'Hallo'];
            const randomIndex = Math.floor(Math.random() * greetings.length);
            cb(greetings[randomIndex]);
        }, timeOne);
    }

    function getRandoName(cb){
        setTimeout(() => {
            const names = ['Alice', 'Bob', 'Carol', 'Devon'];
            const randomIndex = Math.floor(Math.random() * names.length);
            cb(names[randomIndex]);
        }, timeTwo);
    }


    chooseGreeting(greetings => {
        getRandoName(names => {
            console.log(`${greetings}, ${names}!`);
        });
    });
});
