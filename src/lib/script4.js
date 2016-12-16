
'use strict';


let result = (function (startNumber) {

    function mutate(numberSequence, index = 0, result = []) {

        if (numberSequence.length < 4) {
            return getPermutations(numberSequence);
        }
        if (index > numberSequence.length - 1) {
            return result;
        }
        else {
            let base = numberSequence[index];
            let permutation = numberSequence.slice();
            permutation.splice(numberSequence.indexOf(base), 1);

            let subPermutations = getPermutations(permutation);

            subPermutations.forEach(permutation => {
                let newPermutation = [base]
                newPermutation = newPermutation.concat(permutation);

                result.push(newPermutation);
            });

            let newResult = result.slice();
            return mutate(numberSequence, index + 1, newResult);
        }
    }
    function getPermutations(permutation, index = 0, permutations = []) {

        if (index > permutation.length - 1) {
            return permutations;
        }
        else {
            let base = permutation[index];
            let newPermutation = permutation.slice();

            let permutationGroup = getPermutationGroup(base, newPermutation);

            let newPermutations = permutations.concat(permutationGroup);
            return getPermutations(permutation, index + 1, newPermutations);
        }

    }
    function getPermutationGroup(base, permutation, permutationGroup = []) {

        if (permutationGroup.length === 2) {
            return permutationGroup;
        }
        else {
            let newPermutation = createPermutation(base, permutation);
            let newPermutationGroup = permutationGroup.slice();
            newPermutationGroup.push(newPermutation);

            return getPermutationGroup(base, newPermutation, newPermutationGroup);
        }
    }
    function createPermutation(base, permutation) {

        let baseIndex = permutation.indexOf(base);
        let mutation = permutation.slice();

        mutation.splice(baseIndex, 1);
        mutation.reverse();

        let newPermutation = [base];
        newPermutation = newPermutation.concat(mutation);

        return newPermutation;
    }
    function parseToArray(number, arr = []) {

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
            return parseToArray(newNumber, newArr);
        }
    }
    function parseToNumbers(permutations, numbers = []) {
        if (permutations.length === 0) {
            return numbers;
        }
        else {
            let numberSet = permutations[0];
            let number = numberSet.reduce((a, b) => {
                return Number(a + "" + b);
            });

            let newNumbers = numbers.slice();
            newNumbers.push(number);

            let newPermutations = permutations.slice();
            newPermutations.splice(0, 1);

            return parseToNumbers(newPermutations, newNumbers)
        }
    }

    let numberSequence = parseToArray(startNumber);
    let permutations = mutate(numberSequence);
    let result = parseToNumbers(permutations.slice());

    return result;

} (2154));

console.log(result);
