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