
'use strict';

let input = 234;

let result = (function toArray (number) {

    function parse(number, arr = []) {

        if (number % 10 === number) {
            arr.unshift(number);
            return arr;
        }
        else {
            let newArr = [];
            let arrItem = number % 10;

            newArr.unshift(arrItem);
            newArr = newArr.concat(arr);

            let newNumber = Math.floor(number / 10);
            return parse(newNumber, newArr);
        }
    }

    return parse(number);
    
} (input)) 
