
'use strict';

let input= [234, 243, 324, 342, 423, 432];

let result = (function subSetOf(permutations, radius = 1) {

        let center = permutations[0];
        let sorted = permutations.slice().sort();
        let centerIndex = sorted.indexOf(center);

        let result = [];

        result[0] =  sorted[centerIndex - radius] ? sorted[centerIndex - radius] :  center; 
        result[1] =  sorted[centerIndex + radius] ? sorted[centerIndex + radius] :  center;

        return result;

} (input))
