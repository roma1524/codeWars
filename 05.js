function isItLetter(character) {
  // return character.replace(/\W|\d|\_/ig, '') == '' ? false : true;
  return /[a-z]/i.test(character)
}

console.log(isItLetter('1'));