
'use strict';

let input = 234;

let result = (function isValid(number) {

    function validate(number) {

        if (number > 100 && number < 1000) {
            return true;
        }

        return false;
    }

    return validate(number);

} (input));

console.log(result);