// function solution(number){
//     let res = 0;
//
//     for(let i = number - 1; i > 0; i--) {
//         if(i % 3 === 0 || i % 5 === 0) res += i;
//     }
//     return res;
// }
//
// console.log(solution(10))


// function digitalRoot(n) {
//     let res = String(n).split('')
//
//     while (res.length > 1) {
//         res = String(res.reduce((acc, item) => acc + +item, 0)).split('')
//     }
//     return +res;
// }
//
// console.log(digitalRoot(132189))




// function alphabetPosition(text) {
//     const alphb = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//         f: 6,
//         g: 7,
//         h: 8,
//         i: 9,
//         j: 10,
//         k: 11,
//         l: 12,
//         m: 13,
//         n: 14,
//         o: 15,
//         p: 16,
//         q: 17,
//         r: 18,
//         s: 19,
//         t: 20,
//         u: 21,
//         v: 22,
//         w: 23,
//         x: 24,
//         y: 25,
//         z: 26
//     };
//     return text.toLowerCase().split('').map(el => {
//         for(let key in alphb) {
//             if(el === key) return alphb[key]
//         }
//     }).filter(it => it !== undefined).join(' ');
//
//
// }
//
// console.log(alphabetPosition("The narwhal bacons at midnight."))
// console.log('A'.charCodeAt() - 64)


// function persistence(num) {
//     let numArr = String(num).split('');
//     let count = 0;
//
//     if(numArr.length === 1) return count;
//     else
//     {
//         while (numArr.length > 1) {
//             numArr = String(numArr.reduce((acc, item) => acc * +item)).split('')
//             console.log(numArr)
//             count += 1;
//         }
//     }
//     return count;
// }
//
// console.log(persistence(39))


// function solution(string) {
//     let res = '';
//     const arr = string.split('');
//
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i].toLowerCase()) res += arr[i];
//         if(arr[i] === arr[i].toUpperCase()) res += " " + arr[i];
//     }
//
//     return res;
// }
//
// console.log(solution('camelCasing'));

// function isPrime(num) {
//
//     if (num <= 0 || num === 1) return false;
//     for(let i = 2; i < num; i++) {
//
//         if(num !== 2 && num % i === 0) return false;
//     }
//
//     return true;
// }
//
// console.log(isPrime(75))

// function count(string) {
//     const res = {}
//
//     string.split('').forEach((char) => {
//         if(res[char]) {
//             res[char] += 1;
//         } else {
//             res[char] = 1;
//         }
//     })
//
//     return res;
// }
//
// console.log(count('ABCA'))

