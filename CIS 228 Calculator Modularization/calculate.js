'use strict';

import{add,
       subtract,
       multiply,
       divide,} from './base-functions.js';

//Calculator Handler
function calculate() {
    const a = parseFloat(document.getElementById('num1').value); 
    const b = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    let res;
    
    if (isNaN(a) || isNaN(b)) {
        res = "Error";
    } else {
        switch (op) {
            case '+': res = add(a, b); break;
            case '-': res = subtract(a, b); break;
            case '*': res = multiply(a, b); break;
            case '/': res = divide(a, b); break;
            default: res = 'Error';
        }
    }

    document.getElementById('output').innerText= res;
}

export{
    calculate
}

