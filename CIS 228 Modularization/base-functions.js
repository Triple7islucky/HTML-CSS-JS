    'use strict';
    

    function addOne(value) {
      return value + 1;
    }

    function multiply(a, b) {
      return a * b;
    }

    function convertToNumber(value) {
      return Number(value);
    }

    function invalidNumber(value) {
      return isNaN(Number(value));
    }

    function isNumber(value) {
      return !invalidNumber(value);
    }

    function isOdd(value) {
      return value % 2 === 1;
    }

    module.exports = {
      addOne,
      multiply,
      convertToNumber,
      isNumber,
      isOdd,
    }