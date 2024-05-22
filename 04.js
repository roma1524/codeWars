function highAndLow(numbers){
let toArray = numbers.split('');

return toArray;
}function highAndLow(numbers){
    let toArray = numbers.split(' ');
    
    return `${Math.max(...toArray)} ${Math.min(...toArray)}`;
    }

    console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));