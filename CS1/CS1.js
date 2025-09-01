/*
let words = ['apple', 'banana', 'apple', 'orange', 'banana'];
const arr = {}

for (let i = 0; i < words.length; i++) {
    if(arr[words[i]]) {
        arr[words[i]] += 1;
    } else {
        arr[words[i]] = 1;
    }
}
console.log(arr);*/


/*
const numbers = [1,4,7,2, -1,3,-5];
let minNumber = numbers[0];
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (minNumber > numbers[i]) {
        minNumber = numbers[i];
    } else if (maxNumber < numbers[i]) {
        maxNumber = numbers[i];
    }
}

console.log(minNumber);
console.log(maxNumber);*/


/*
let numbers = [1, 2, 4, 2, 1, 5, 4, 7, 8, 7, 1, 1];
const objectOfNumbers = {}

for (let i = 0; i <= numbers.length - 1; i++) {
    if(objectOfNumbers[numbers[i]]) {
        objectOfNumbers[numbers[i]] += 1;
    } else {
        objectOfNumbers[numbers[i]] = 1;
    }
}

for(let key in objectOfNumbers) {
    if(objectOfNumbers[key] < 2) {
        delete objectOfNumbers[key];
    }
}

console.log(objectOfNumbers);
*/
