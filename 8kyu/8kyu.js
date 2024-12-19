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


// Our football team has finished the championship.
//
//     Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// function points(games) {
//     let result = 0;
//     games.forEach(i => {
//         let j = i.split(':')
//         if(+j[0] > +j[1]) result += 3;
//         if(+j[0] < +j[1]) result += 0;
//         if(+j[0] === +j[1]) result += 1
//     })
//     return result;
// }
//
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))


// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((a, b) => a + b);
// }
//
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//     If it is a square, return its area. If it is a rectangle, return its perimeter.

/*
const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (l * 2) + (w * 2);
};

console.log(areaOrPerimeter(3,  3))*/


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

/*
function sumMix(x){
    return x.reduce((a, b) => +a + +b, 0);
}

console.log(sumMix([9, 3, '7', '3']))*/


// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
//     You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
//     Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
//     Write a code that gives out the total amount for different days(d).


/*
function rentalCarCost(d) {
    if(d >= 3 && d < 7) return (d * 40) - 20;
    if(d >= 7) return (d * 40) - 50;
    return d * 40;
}

console.log(rentalCarCost(3))*/


// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//     Return the average of the given array rounded down to its nearest integer.
//
//     The array will never be empty.

/*
function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}


console.log(getAverage([1,2,3,4,5,]))*/


// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//     console.log(beast[0])
//     return beast.split('')[0] === dish.split('')[0] && beast.split('')[beast.length - 1] === dish.split('')[dish.length - 1];
// }
//
// console.log(feast("brown bear", "bear claw"))


// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// function monkeyCount(n) {
//     const res = []
//     for (let i = 1; i <= n; i++) {
//         res.push(i);
//     }
//     return res;
// }
//
// monkeyCount(5)


// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//
//     If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.


/*
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime(10000, true))*/

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
//     For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const quarterOf = (month) => {
//     let res = 0;
//     if(month <= 3) res = 1;
//     if(month > 3 && month <= 6) res = 2;
//     if(month > 6 && month <= 9) res = 3;
//     if(month > 9 && month <= 12) res = 4;
//     return res;
// }
//
// console.log(quarterOf(8))
//
// const quarterOf = (month) => {
//     return Math.ceil(month/3);
// }
//
// console.log(quarterOf(11))


// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.


// function removeEveryOther(arr){
//     return arr.filter((el, ind) => ind % 2 !== 1)
// }
//
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
//     If no occurrences can be found, a count of 0 should be returned.

// function strCount(str, letter){
//     let res = 0;
//     str.split('').forEach(el => {
//         if(el === letter) res += 1;
//     })
//     return res;
// }
//
// console.log(strCount('Hello', 'l'))


// function firstNonConsecutive (arr) {
//     let res = 0;
//     for(let i = 0; i < arr.length; i++) {
//         let f = arr[i + 1] - arr[i];
//         if(f > 1) {
//             res = arr[i + 1];
//             return res;
//         }
//     }
//     return res !== 0 ? res : null;
// }
//
// console.log(firstNonConsecutive([1,3,4,5,6,7,9,10]))


// function testEven(n) {
//     return n % 2 === 0 ? true : false;
// }
//
// console.log(testEven(0.5))


// Write a function that checks if a given string (case insensitive) is a palindrome.
//
//     A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// function isPalindrome(x) {
//     let res = x.toLowerCase();
//     return res === x.toLowerCase().split('').reverse().join('') ? true : false;
// }
//
// console.log(isPalindrome('Abba'))

// function str (string) {
//     let res = [];
//     string.split('').forEach(el => {
//         if(el === el.toLowerCase()) res.push(el.toUpperCase())
//         if(el === el.toUpperCase()) res.push(el.toLowerCase())
//     })
//     return res.join('');
// }
//
// console.log(str("HeLLo WoRLD"))


// function greet(language) {
//     let res = 'Welcome';
//     const lang = [
//         {english: "Welcome"},
//         {czech: "Vitejte"},
//         {danish: "Velkomst"},
//         {dutch: "Welkom"},
//         {estonian: "Tere tulemast"},
//         {finnish: "Tervetuloa"},
//         {flemish: "Welgekomen"},
//         {french: "Bienvenue"},
//         {german: "Willkommen"},
//         {irish: "Failte"},
//         {italian: "Benvenuto"},
//         {latvian: "Gaidits"},
//         {lithuanian: "Laukiamas"},
//         {polish: "Witamy"},
//         {spanish: "Bienvenido"},
//         {swedish: "Valkommen"},
//         {welsh: "Croeso"},
//     ]
//     lang.forEach(el => {
//
//         for(let key in el) {
//             if(key === language) res = el[language];
//         }
//     })
//     return res;
// }
//
// console.log(greet('dutch'))

// function stringy(size) {
//     let str = '';
//     for(let i = 0; i < size; i++) {
//         if(i % 2 === 1) str += 0;
//         if(i % 2 === 0) str += 1;
//     }
//     return str;
// }
//
// console.log(stringy(7))


// function findMultiples(integer, limit) {
//     let res = 0;
//     const resArr = []
//     let mark = true;
//     while (mark) {
//         res += integer;
//         resArr.push(res);
//         if(res > limit) {
//             resArr.pop()
//             mark = false;
//         }
//     }
//     return resArr;
// }
//
// console.log(findMultiples(4, 27))