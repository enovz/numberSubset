
'use strict';

let numberModule = (function () {

    //chache DOM
    let $el = $("#number-module"),
        $button = $el.find("button"),
        $input = $el.find("input");

    //bind events
    $button.on("click", _public.getNumbers($input))

    //methods
    let _private = {

        isValid: function isValid(input) {

            function validate(number) {

                if (number > 100 && number < 1000) {
                    return true;
                }

                return false;
            };

            return validate(input);
        },
        toArray: function toArray(number) {

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

        },
        permutate: function permutate(array) {

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

            return getPermutations(array);

        },
        subSetOf: function subSetOf(array) {

            function getSubSet(permutations, radius = 1) {

                let center = permutations[0];
                let sorted = permutations.slice().sort();
                let centerIndex = sorted.indexOf(center);

                let result = [];

                result[0] = sorted[centerIndex - radius] ? sorted[centerIndex - radius] : "Number : " + center + " is the samllest";
                result[1] = sorted[centerIndex + radius] ? sorted[centerIndex + radius] : "Number : " + center + " is the biggest";

                return result;

            }

            return getSubSet(array);
        }
    };

    let _public = {

        getNumbers: function (input) {

            if (_private.isValid(input)) {

                let firstPermutation = _private.toArray(input);
                let permutations = _private.permutate(firstPermutation);
                let subSet = _private.subSetOf(permutations);

                return subSet;
            }
            else {
                return "Invalid Input";
            }
        }
    };

    return _public;

})()
