function getMiddle(s){
    let lenhthOfWord = s.length;
    if(lenhthOfWord == 1){
        return s;
    } else if (lenhthOfWord % 2 == 1 ) {
        return s[Math.floor(lenhthOfWord / 2)]
    } else if (lenhthOfWord % 2 == 0 ) {
        return `${s[(lenhthOfWord / 2) - 1]}${s[lenhthOfWord / 2]}`
    }
  }

  console.log(getMiddle("A"));