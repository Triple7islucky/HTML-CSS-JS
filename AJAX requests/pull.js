'use strict';

function main() {
    //https://ccp-lessons.com/teh-raven.txt

    let options = {
        method:'GET', 
        headers: {
            'Accept': 'text.html'
        }
    };

    fetch('https://echoapi.ccp-lessons.com', options)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Invalid response");
            }
        return response.text();
    })
    .then((text) =>{
        console.log(text);
    })
    .catch((e) => {
        console.error(e.message);
    });
    
}



main();