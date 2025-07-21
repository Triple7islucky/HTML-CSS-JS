'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const timeOne = Math.floor(Math.random() * 1000);
    const timeTwo = Math.floor(Math.random() * 1000);

    function getGreetingAsync() {
        return new Promise(resolve => {
        setTimeout(() => {
            const greetings = ['Hello', 'Hola', 'Konnichiwa', 'Bonjour', 'Hallo'];
            const randomIndex = Math.floor(Math.random() * greetings.length);
            resolve(greetings[randomIndex]);
            }, timeOne);
        });
    }

    function getNameAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            const names = ['Alice', 'Bob', 'Carol', 'Devon'];
            const randomIndex = Math.floor(Math.random() * names.length);
            resolve(names[randomIndex]);
        }, timeTwo);
        });
    }

    async function showGreeting() {
        const greeting = await getGreetingAsync();
        const personName = await getNameAsync();
        console.log(`${greeting}, ${personName}!`);
    }

    showGreeting();
});
