// /*
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//     Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321*/

/*
function descendingOrder(n) {
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(123456789))*/


// =================================================================================


/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    The tests will always use some integral number, so don't worry about that in dynamic typed languages.*/


// var isSquare = function(n){
    /*if(n < 0) {
        return false;
    }
    if(n === 0) {
        return true;
    }
    if(n === 1) {
        return true;
    }
    for(let i = 1; i < n; i++) {
        if (n % i === 0 && i * i === n) {
            return true;
        }
    }
    return false*/
    // return Math.sqrt(n) % 1 === 0
// }

// console.log(isSquare(26))



// This time no story, no theory. The examples below show you how to write function accum:

// function accum(s) {
/*const result = [];

 s.split('').forEach((el, index) => {
    let j = [el.toUpperCase()];
    for(let i = 1; i <= index; i++) {
        j.push(el.toLowerCase());
    }
    result.push(j.join(''))
})

return result.join('-')*/
// return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// console.log(accum("ZpglnRxqenU"))



// ============================================================================================================



/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.*/


/*
function maskify(cc) {
    if(cc.length <= 4) {
        return cc
    }
    const ends = cc.slice(cc.length - 4);
    let res = '';
    for (let i = 0; i < (cc.length - 4); i++) {
        res += '#';
    }
    return res + ends;

    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('4556364607935616').length);*/

// =================================================================================

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)

// function stray(numbers) {
   /* const res = {};
    for (let i = 0; i < numbers.length; i++) {
        if (!res[numbers[i]]) {
            res[numbers[i]] = 1
        } else {
            res[numbers[i]] += 1
        }
    }
    for(let key in res) {
        if(res[key] === 1) {
            return +key;
        }
    }*/




    /*for (var i in numbers){
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }*/




    /*var a = numbers.sort();

    if(a[0] != a[1]) {
        return a[0]
    }
    return a[a.length-1]*/
}

// console.log(stray([1, 2, 1]))


// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
//
//     a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
//
//     The four operators are "add", "subtract", "divide", "multiply".

/*
function arithmetic(a, b, operator){
    switch(operator){
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return a / b;
            break;
    }
}

console.log(arithmetic(1, 2, "add"))
console.log(arithmetic(8, 2, "subtract"))
console.log(arithmetic(5, 2, "multiply"))
console.log(arithmetic(8, 2, "divide"))*/



// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
//     The input to the function will be an array of three distinct numbers (Haskell: a tuple).

/*
function gimme (triplet) {
    const newArr = [...triplet]
    let sortedEl = newArr.sort((a, b) => a - b)[1];

    return triplet.findIndex(el => el === sortedEl);
}

console.log(gimme([2, 3, 1]))
console.log(gimme([5, 10, 14]))
console.log(gimme([2.1, 3.2, 1.4]))
console.log(gimme([5.9, 10.4, 14.2]))*/


// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// var capitals = function (word) {
//     const resArr = [];
//     word.split('').forEach((el, i) => {
//         if(el.toUpperCase() === el) {
//             resArr.push(i);
//         }
//     })
//     return resArr;
// };
//
// console.log(capitals('CodEWaRs'))



// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
//
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.


// function twoOldestAges(ages){
//     const res = ages.sort((a, b) => a - b);
//     return [res[res.length -2], res[res.length -1]];
// }
//
// console.log(twoOldestAges([1,5,87,45,8,8]))


// Create a function that returns the name of the winner in a fight between two fighters.
//
//     Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//
//     Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//
//     Your function also receives a third argument, a string, with the name of the fighter that attacks first.


/*
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
    let mark = true;
    let winner = null;
    const first = firstAttacker === fighter1.name ? fighter1 : fighter2;
    const second = firstAttacker !== fighter2.name ? fighter2 : fighter1;
    let winF = first.health;
    let winS = second.health;

    while (mark) {
        winS -= first.damagePerAttack;
        if (winS <= 0) {
            winner = first.name;
            mark = false;
            return winner;
        } else {
            winF -= second.damagePerAttack;
            if (winF <= 0) {
                winner = second.name;
                mark = false;
                return winner;
            }
        }
    }
}*/

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//
//     Input/Output
//     [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string


/*function reverseLetter(str) {
    return str.split('')
        .reverse()
        .join('')
        .replace(/[\W \s \d \_]/gi, '');
}

console.log(reverseLetter("r9gpzuk$lwm1flvaetilez_@czcz8!.njp-yynulc"))*/




// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//
// If the score < 0, return 0.

// function checkExam(array1, array2) {
//     let res = 0;
//
//     for(let i = 0; i < array1.length; i++) {
//         if(array2[i] === '') {
//             continue
//         } else {
//             if(array1[i] === array2[i]) {
//                 res += 4;
//             } else {
//                 res -= 1;
//             }
//         }
//     }
//     return res < 0 ? 0 : res;
// }
//
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))


// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.


// function sumDigits(number) {
//     return (number + '').replace(/\D/gi, '0')
//         .split('')
//         .reduce((acc, el) => acc += +el, 0);
// }
//
//
// console.log(sumDigits(-32))



// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


// function solve(s) {
//     let res = s.split('');
//     let halfOfLength = 0;
//     for (let i = 0; i < res.length; i++) {
//         if (res[i].toUpperCase() === res[i]) halfOfLength += 1;
//     }
//     console.log(res.length)
//     console.log(halfOfLength)
//     console.log(res.length / halfOfLength)
//     if (halfOfLength === 0 || res.length / halfOfLength >= 2) {
//         return res.join('').toLowerCase();
//     }
//     return res.join('').toUpperCase();
// }
//
// console.log(solve("COdeFfDd"));


// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
//
//     Conditions :
// N is divisible by divisor
//
// N is less than or equal to bound
//
// N is greater than 0.


// function maxMultiple(divisor, bound){
//     let mark = true;
//     let res = 0;
//     while(mark) {
//         res += divisor;
//         if((bound - res) < divisor ) {
//             mark = false;
//             return res;
//         }
//     }
// }
//
//
// console.log(maxMultiple(3,10))


Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// function minValue(values){
//     let arr = Array.from(new Set(values))
//     return parseInt(arr.sort().join(''))
// }
//
// console.log(minValue([1, 3, 1]))



// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!


// function capitalize(s){
//     const newArr = s.split('').map((el, index) => {
//         if(index === 0 || index % 2 === 0) {
//             return el.toUpperCase()
//         } else {
//             return el;
//         }
//     }).join('');
//     const newArr2 = s.split('').map((el, index) => {
//         if(index === 1 || index % 2 === 1) {
//             return el.toUpperCase()
//         } else {
//             return el;
//         }
//     }).join('');
//     return [newArr, newArr2];
// };
//
// console.log(capitalize("abcdef"));


// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// function sumOfMinimums(arr) {
//     const resArr = [];
//     arr.forEach(el => {
//         let sortArr = el.sort((a, b) => a - b);
//         resArr.push(sortArr[0]);
//     })
//     return resArr.reduce((acc, el) => acc += el, 0);
// }
//
// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));



// Given a sequence of numbers, find the largest pair sum in the sequence.


// function largestPairSum (numbers) {
//     const res = numbers.sort((a, b) => a - b).slice(-2);
//     return res[0] + res[1];
// }
//
// console.log(largestPairSum([10,14,2,23,19]))


// Write a small function that returns the values of an array that are not odd.
//
//     All values in the array will be integers. Return the good values in the order they are given.


// function noOdds( values ){
//     return values.filter((el, i) => i % 2 === 0);
// }
//
// console.log(noOdds([-59,169,186,11,200,104,-39,155,9,91,140,-99,177,31,1,119,-194,-155,-140,137,-195,-27,-100,182,-199,-144,-22,76,-88,-47,101,139,176,-19,-31,57,-74,58,-168,125,-102,191,169,200,-80,-95,35,51,-82,196,-157,44,-165,-105,3,-65,12,-12,114,17,38,128,-145,188,-61,90,173,-60,198,60,-150,84,-14,4,169,100,-6,-99,-108,-189,-34,-134,150,-18,144,107,-191,-94,-150,151,82,174,171,-177,174,-19,-51,142,98,-94,-3,189,164,-137,-132,-138,-27,-18,-1,-162,199,-184,25,135,-67,187,-34,-111,-27,-98,-39,181,-35,25,-95,-140,6,-187,-199,76,166,-193,-128,-68,166,-151,-187,-64,-136,74,4,-151,26,-95,166,-164,-75,2,-22,-57,179,-154,-112,6,193,-100,-18,23,-196,45,52,-67,-1,9,168,-139,-177,138,133,-199,96,-12,-148,-5,177,-156,58,42,-161,-61,-93,-122,-28,-56,-161]))



// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// function evenNumbers(array, number) {
//     return array.filter(el => el % 2 === 0).slice(-number);
// }
//
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))


// Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


// function isSortedAndHow(array) {
//     const answerArr = ['yes, ascending', 'yes, descending', 'no'];
//     const ascending = [...array].sort((a, b) => a - b);
//     const descending = [...array].sort((a, b) => b - a);
//     let mark = false;
//
//     console.log(descending)
//     console.log(array)
//
//     function check(arr) {
//         let res = 0;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] === arr[i]) {
//                 res += 1;
//             }
//         }
//
//         if (res === arr.length) {
//             mark = true;
//             return;
//         }
//     }
//
//     check(ascending);
//     if (mark) {
//         return answerArr[0]
//     }
//     check(descending);
//     if (mark) {
//         return answerArr[1]
//     }
//     return answerArr[2]
//
//
//
//
// }
// function isSortedAndHow(arr) {
//     return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
// }

// console.log(isSortedAndHow([4, 2, 30]))



// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
//
//     In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// function predictAge([...rest]){
//     return Math.sqrt(rest.map(el => el * el)
//         .reduce((acc, el) => acc + el, 0)) / 2
// }
//
// console.log(predictAge(65,60,75,55,60,63,64,45))


// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// function adjacentElementsProduct(array) {
//     let res = null;
//     array.forEach((el, index) => {
//         let fd = el * array[index + 1];
//         if(fd > res || res === null) res = fd;
//     })
//     return res
// }
//
// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))



// Year Of Course always Positive .
//     Have no fear , It is guaranteed that the answer exists .
//     It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)

/*
function nextHappyYear(year){
    let res = null;
    for(let i = year + 1; i <= 10000; i++) {
        let nextYear = i.toString().split('');
        if(Array.from(new Set(nextYear)).length === 4){
            res = i;
            return res;
        }
    }
}


console.log(nextHappyYear(1987))*/


/*
Please write a function that sums a list, but ignores any duplicated items in the list.

    For instance, for the list [3, 4, 3, 6] the function should return 10,
    and for the list [1, 10, 3, 10, 10] the function should return 4.*/


function sumNoDuplicates(numList) {

}

console.log(sumNoDuplicates([1, 1, 2, 3]))