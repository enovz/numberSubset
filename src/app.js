
'use strict';

let numberModule = (function () {

    //view
    let $el = $("#numberModule");
    let view = {
        button: $el.find("button"),
        input: $el.find("input"),
        template: $el.find("#numberList")
    }

    //methods
    let methods = {

        refresh: function refresh(input) {

            if (view.template.length !== 0) {
                view.template.empty();
            }

            input.forEach(item => {
                view.template.append("<li>" + item + "</li>");
            });

        },
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

                    let newPermutaiton = mutate(array[0], permutation.slice());
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

                result[0] = sorted[centerIndex - radius] ? sorted[centerIndex - radius] : center;
                result[1] = sorted[centerIndex + radius] ? sorted[centerIndex + radius] : center;

                return result;

            }

            return getSubSet(array);
        }
    };

    //controller
    let controller = {

        getNumbers: function (number) {

            let input = view.input.val() || number;

            if (methods.isValid(input)) {

                let firstPermutation = methods.toArray(input);
                let permutations = methods.permutate(firstPermutation);
                let subSet = methods.subSetOf(permutations);

                return methods.refresh(subSet) || subSet;
            }
            else {
                return "Invalid Input";
            }
        }
    };

    //bind events
    view.button.on("click", controller.getNumbers);

    let api = {
        getNumbers: controller.getNumbers
    }

    return api;

})()
