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

// function solution(str) {
//     const res = [];
//     let fr = [];
//     const arr = str.split('');
//
//     if (!str) return res;
//
//     for (let i = 0; i <= arr.length; i++) {
//         if(i % 2 === 0){
//             fr.push(arr[i]);
//         }
//         if (i % 2 === 1) {
//             if(arr[i]) {
//                 fr.push(arr[i]);
//                 res.push(fr.join(''));
//                 fr = []
//             }
//         }
//         if( i % 2 === 1 && fr.length === 1 && !arr[i]) {
//             fr.push('_');
//             res.push(fr.join(''));
//             fr = []
//         }
//     }
//
//     return res;
// }
//
// console.log(solution('abcdefg'))


// function validPhoneNumber(phoneNumber){
//     return !!phoneNumber.match(/\(\d{3}\)\s\d{3}-\d{4}/gi)
// }
//
// console.log(validPhoneNumber("(098) 123 4567"))


// function pyramid(n) {
//     const res = [];
//     if(!n) return res;
//
//     for(let i = 1; i <= n; i++) {
//         let ff = [];
//         for(let j = 0; j < i; j++) {
//             ff.push(1);
//         }
//         res.push(ff);
//         ff = [];
//     }
//
//     return res;
// }
//
// console.log(pyramid(5))

// function upArray(arr) {
//     let intArr = +arr.join('');
//     let res = null;
//     let check = arr.filter(item => item < 0 || item > 9)
//
//     if (!!check.length || !arr.length || arr[arr.length - 1] < 0 || arr[arr.length -1] > 9) {
//         return res;
//     } else if (arr.length > 10) {
//         res = String(BigInt(arr.join('')) + BigInt(1)).split('').map(el => +el);
//         if (arr.length > res.length && arr[0] === 0) res.unshift(0);
//     } else {
//         res = String((intArr + 1)).split('').map(item => +item);
//         if (arr.length > res.length && arr[0] === 0) res.unshift(arr.shift());
//     }
//
//     return res;
// }
//
// console.log(upArray([0,9,1,8,0,7,9,3,3,5,7,4,0,1,1,4,8,2,9,3,6,5,1,0,3,2]))


// function dashatize(num) {
//     let res = String(num).split('').filter(n => n !== '-');
//     let str = [];
//     let strArr = [];
//
//     for (let i = 0; i < res.length; i++) {
//         if (res[i] % 2 === 0 && res[i + 1] % 2 === 0 && res[i + 2] % 2 === 0) {
//             str.push(res[i] + res[i + 1] + res[i + 2]);
//             ++i;
//             ++i;
//         } else if (res[i] % 2 === 0 && res[i + 1] % 2 === 0) {
//             str.push(res[i] + res[i + 1]);
//             ++i;
//         } else str.push(res[i]);
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
//             strArr.push(str[i] + str[i + 1]);
//             ++i;
//         } else strArr.push(str[i]);
//     }
//
//     return strArr.join('-') ?? str.join('-');
// }

// function dashatize(num) {
//     return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
// };
//
// function dashatize(num) {
//     return String(num)
//         .replace(/([13579])/g, "-$1-")
//         .replace(/--+/g, "-")
//         .replace(/(^-|-$)/g, "")
// }
//
// console.log(dashatize(928282))

/*
const a = [
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]
]
const b = [
    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]
]

function matrixAddition(a, b) {
    const result = []
    for (let i = 0; i < a.length; i++) {
        const fd = []
        for (let j = 0; j < b.length; j++) {
            fd.push(a[i][j] + b[i][j])
        }
        result.push(fd)
    }
    return result;
}

console.log(matrixAddition(a, b))*/


/*
function longestRepetition(s) {

    if (s.length === 0) return ['', 0];
    const res = [];
    const arr = s.split('');
    let ss = [arr[0]]
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        if (ss[0] === arr[i]) {
            ss.push(arr[i]);
        } else if (ss[0] !== arr[i]) {
            res.push(ss)
            ss = [arr[i]]
        }
    }
    res.push(ss)
    res.sort((a, b) => b.length - a.length);
    console.log(res)
    return [res[0][0], res[0].length];
}

console.log(longestRepetition('ba'))*/
