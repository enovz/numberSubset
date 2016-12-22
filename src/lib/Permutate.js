
'use strict';

let input = 236;

let permutations = (function () {

    function toArray(number, arr = []) {

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
            return toArray(newNumber, newArr);
        }
    }
    function toNumber(permutation) {

        let numberSet = permutation.slice();

        let number = numberSet.reduce((a, b) => {
            return Number(a + "" + b);
        });

        return number;
    }
    function mutate(mutator, permutation) {

        let newPermutation = permutation.slice();
        let mutatorIndex = permutation.indexOf(mutator);

        if (mutatorIndex !== permutation.length - 1) {

            let mutationTarget = permutation[mutatorIndex + 1];

            newPermutation[mutatorIndex + 1] = mutator;
            newPermutation[mutatorIndex] = mutationTarget;
        }
        else {

            newPermutation[mutatorIndex] = newPermutation[0];
            newPermutation[0] = mutator;
        }

        return newPermutation;
    }
    function getPermutations(permutation, permutations = []) {

        let number = toNumber(permutation.slice());

        if (permutations.indexOf(number) !== -1) {
            return permutations;
        }
        else {
            let newPermutations = permutations.slice();
            newPermutations.push(number);

            let newPermutaiton = mutate(firstPermutation[0], permutation.slice());
            return getPermutations(newPermutaiton, newPermutations);
        }
    }

    let firstPermutation = toArray(input);

    return getPermutations(firstPermutation);

} (input))



