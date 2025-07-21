'use strict';
// Need to use these links below one for sending, other for retreiving
//https://messenger.ccp-lessons.com/message
//https://messenger.ccp-lessons.com/message/JNUM/ID

const sendBtn = document.getElementById("sendBttn");
sendBtn.addEventListener('click', returnToSender);


async function senderLeaves(JNUM, text){
    let sender = await fetch('https://messenger.ccp-lessons.com/message', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({jnum: JNUM, message: text})
    });

    if(!sender.ok) {
        const bodyText = await sender.text();
        console.error('POST failed: ', sender.status, bodyText);
        throw new Error('POST returned: ' + sender.status);
    }
    const json = await sender.json();
    return json.id;
}
    

async function senderReturns(JNUM, newId) {
    const sMsg = `https://messenger.ccp-lessons.com/message/${JNUM}/${newId}`;
    const response = await fetch(sMsg, {
        headers: {
            'Accept': 'application/json'
        }
    });

    if(!response.ok) {
        const bodyText = await response.text();
        console.error('GET failed: ', response.status, bodyText);
        throw new Error('GET returned: ' + response.status);
    }
    return response.json();
}

async function returnToSender(){
    try {
        const JNUM = document.getElementById('jnum').value;
        const text = document.getElementById('message').value;
        const newId = await senderLeaves(JNUM, text);
        const retreive = await senderReturns(JNUM, newId);
        document.getElementById('thyoutput').textContent = retreive.message;
    } catch (e) {
        console.error(e);
        document.getElementById('thyoutput').textContent = 'Error: ' + e.message;
    }
}