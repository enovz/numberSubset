
'use strict';

let permutations = [234, 243, 324, 342, 423, 432];

let result = (function subSetOf(sequence, radius = 1) {

        let center = sequence[0];
        let sorted = sequence.slice().sort();
        let centerIndex = sorted.indexOf(center);

        let result = [];

        result[0] =  sorted[centerIndex - radius] ? sorted[centerIndex - radius] : "Number : " + center + " is the samllest"; 
        result[1] =  sorted[centerIndex + radius] ? sorted[centerIndex + radius] : "Number : " + center + " is the biggest";

        return result;

} (permutations))
