'use strict';

const arrayFunctions = require('./array-functions.js');

  function start() {
    document.addEventListener('DOMContentLoaded', () =>{
      document.querySelector('#button-calculate').addEventListener('click', (evnt) => {
        let input = document.querySelector('#input-array').value;
        let values = input.split('\n');
        arrayFunctions.filterArrayNumbers(values);
        arrayFunctions.convertToNumberArray(values);
        arrayFunctions.filterArrayOddNumbers(values);
        arrayFunctions.addOneArray(values);
        let result = AarrayFunctions.multiplyArray(values);
        document.querySelector('#result').textContent = result;
      });
    });
  }

  start();
