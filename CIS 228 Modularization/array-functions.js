'use strict';
const baseFunctions = require('./base-functions.js');

  function multiplyArray(theArray) {
      let result = 1;
      for (let item of theArray) {
        result = baseFunctions.multiply(result, item);
      }
      return result;
    }

    function addOneArray(theArray) {
      for (let i = 0; i < theArray.length; i++) {
        theArray[i] = baseFunctions.addOne(theArray[i]);
      }
    }

    function filterArrayNumbers(theArray) {
      for (let i = theArray.length - 1; i >= 0; i--) {
        if (!baseFunctions.isNumber(theArray[i])) {
          theArray.splice(i, 1);
        }
      }
    }

    function filterArrayOddNumbers(theArray) {
      for (let i = theArray.length - 1; i >= 0; i--) {
        if (!baseFunctions.isOdd(theArray[i])) {
          theArray.splice(i, 1);
        }
      }
    }

    function convertToNumberArray(theArray) {
      for (let i = 0; i < theArray.length; i++) {
        theArray[i] = baseFunctions.convertToNumber(theArray[i]);
      }
    }
    

    module.exports = {
      multiplyArray,
      addOneArray,
      filterArrayNumbers,
      filterArrayOddNumbers,
      convertToNumberArray
    }
