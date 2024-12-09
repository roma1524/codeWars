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
}

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
}

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