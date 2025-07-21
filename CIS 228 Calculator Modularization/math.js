// Arithmetic functions to take the two numbers and complete the operation.
'use strict';

import { calculate } from "./calculate.js";

    // main function
    function main(){
            document.addEventListener('DOMContentLoaded', ()=> {
            document.getElementById('equalsBtn').addEventListener('click', calculate);
            });
    };

main();