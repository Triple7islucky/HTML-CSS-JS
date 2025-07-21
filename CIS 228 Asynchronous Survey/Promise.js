'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const timeOne = Math.floor(Math.random() * 1000);
    const timeTwo = Math.floor(Math.random() * 1000);
    const greeting = new Promise(greetingsExecutor);
    const personName = new Promise(namesExecutor);

    function greetingsExecutor(resolve, reject){
        setTimeout(() => {
            const greeting = ['Hello', 'Hola', 'Konnichiwa', 'Bonjour', 'Hallo'];
            const randomIndex = Math.floor(Math.random() * greeting.length);
            resolve(greeting[randomIndex]);
        }, timeOne);
    }

    function namesExecutor(resolve, reject){
        setTimeout(() => {
            const names = ['Alice', 'Bob', 'Carol', 'Devon'];
            const randomIndex = Math.floor(Math.random() * names.length);
            resolve(names[randomIndex]);
        }, timeTwo);
    }
    
    Promise.all([greeting, personName])
    .then(([resolvedGreeting, resolvedName])=> {
        console.log(`${resolvedGreeting}, ${resolvedName}!`);
    })
    .catch(err => console.error('something went wrong:', err));

});