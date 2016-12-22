
'use strict';

let input = 234;

let result = (function isValid(number) {

    if (number > 100 && number < 1000) {
        return true;
    }

    return false;

} (input))

console.log(result);