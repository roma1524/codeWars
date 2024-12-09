// function getGrade (s1, s2, s3) {
//
//     let res = (s1 + s2 + s3) / 3;
//
//     if(res >= 90) {
//         return 'A';
//     } else if(res >= 80) {
//         return 'B';
//     } else if(res >= 70) {
//         return 'C';
//     } else if(res >= 60) {
//         return 'D';
//     } else if(res >= 0) {
//         return 'F';
//     }
//   }
//
//   console.log(getGrade(70,70,100));


// function getMiddle(s){
//     let lenhthOfWord = s.length;
//     if(lenhthOfWord == 1){
//         return s;
//     } else if (lenhthOfWord % 2 == 1 ) {
//         return s[Math.floor(lenhthOfWord / 2)]
//     } else if (lenhthOfWord % 2 == 0 ) {
//         return `${s[(lenhthOfWord / 2) - 1]}${s[lenhthOfWord / 2]}`
//     }
//   }
//
//   console.log(getMiddle("A"));


// var isAnagram = function(test, original) {
//     let str = toSort(test);  //  Преобразовываем аргуем к одному регстру / разбиваем на массив / и приминяем стандартную сортировку
//     let strOrg = toSort(original) //  Преобразовываем аргуем к одному регстру / разбиваем на массив / и приминяем стандартную сортировку
//
//     if(str.length !== strOrg.length) {  // Проверяем, если длины массива разные, то сразу false
//         return false;
//     } else {
//         for(let i = 0; i < strOrg.length; i++) { // у нас аргументы отсортированы, и поэтому, должны быть в одинаковой последовательности, и если мы встречаем первое не совпадение, то можем смело возвращать false
//             if(str[i] !== strOrg[i]) {
//                 return false
//             }
//         }
//     }
//     return true;  // если все проверки пройдены, то возвращаем true
//     };
//
//     function toSort (arg)  {  // Функция создана для удобства, чтобы не дублировать rjl
//         return arg.toLowerCase().split('').sort();
//     }
//
//     console.log(isAnagram("Buckethead", "DeathCubeK"));
//




// function highAndLow(numbers){
// let toArray = numbers.split('');
//
// return toArray;
// }function highAndLow(numbers){
//     let toArray = numbers.split(' ');
//
//     return `${Math.max(...toArray)} ${Math.min(...toArray)}`;
//     }
//
//     console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));




// function isItLetter(character) {
//   // return character.replace(/\W|\d|\_/ig, '') == '' ? false : true;
//   return /[a-z]/i.test(character)
// }
//
// console.log(isItLetter('1'));


// function reverseOddCount(array){
//     let objRes = {};
//     // array.forEach(el => {
//     //     if(objRes[el] == el) {
//     //         objRes.el += 1;
//     //     } else if (objRes.el !== undefined) {
//     //         objRes.el += 1;
//     //     }
//     // });
//
//     for(let i = 0; i < array.length; i++) {
//
//                     if(objRes[i] !== undefined) {
//                         objRes[i] = i;
//                     } else if (objRes[i] == i) {
//                         objRes[i] = i;
//                     }
//                 }
//
//     return objRes;
//   }
//
//   console.log(reverseOddCount(['a', 'a', 'b', 'c', 'c', 'd']));



// function makeNegative(num) {
//     return num <= 0 ? num : -num;
//    }
//
//    console.log(makeNegative(5));



// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


// function basicOp(operation, value1, value2){
//     if(operation === '+') {
//         return value1 + value2;
//     }
//     if(operation === '-') {
//         return value1 - value2;
//     }
//     if(operation === '*') {
//         return value1 * value2;
//     }
//     if(operation === '/') {
//         return value1 / value2;
//     }
//   }
//
//   console.log(basicOp("+", 4, 7));



// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`
//   }
//
//   console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
//


//
// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0;
// }
//
// console.log(isDivisible(8,3,4))


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//
//     Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// function paperwork(n, m) {
//     return n < 0 || m < 0 ? 0 : n * m;
// }
//
// console.log(paperwork(5, -5))


// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
//     The function takes a name as its only argument, and returns one of the following strings:


// function areYouPlayingBanjo(name) {
//     let n = name.split('')[0].toLowerCase();
//
//     return n === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
// }
//
// console.log(areYouPlayingBanjo('Adam'))


// Implement a function which convert the given boolean value into its string representation.
//
//     Note: Only valid inputs will be given.

// function booleanToString(b){
//     return b ? 'true' : 'false';
// }
//
// console.log(booleanToString(false))


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }
//
// console.log(simpleMultiplication(4))


// Write a function which converts the input string to uppercase.

// function makeUpperCase(str) {
//     return str.toUpperCase();
// }


// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//     a can contain numbers or strings. x can be either.
//
//     Return true if the array contains the value, false if not.

// function check(a, x) {
//     return a.includes(x);
// }
//
// console.log(check([66, 104, 11], 66))


// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// function smash (words) {
//     return words.join(' ')
// };



// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]


// const reverseSeq = n => {
//     let result = [];
//
//     for(let i = n; i > 0; i--){
//         result.push(i)
//     }
//
//     return result;
// };
//
// console.log(reverseSeq(7))


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//
//     Return true if yes, false otherwise :)


//     function hero(bullets, dragons){
//         return bullets - ( dragons * 2) >= 0 ? true : false;
//     }
//
// console.log(hero(10, 5))


// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
//
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
//
//     Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump - (mpg * fuelLeft) <= 0;
// };
//
// console.log(zeroFuel(50, 25, 2))


// Create a function with two arguments that will return an array of the first n multiples of x.
//
//     Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array or list ( depending on language ).

// function countBy(x, n) {
//     let z = [x];
//     let num = x;
//         for(let i = n; i > 1; i--) {
//             z.push(num += x);
//         }
//     return z;
// }
//
// console.log(countBy(2,5))


// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num){
//     let result = '';
//   if(num) {
//     for(let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   }
//   return result
// }
//
// console.log(countSheep(2));


// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// function reverseWords(str){
//     return str; // reverse those words
//   }


// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name){
//     return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
//   }