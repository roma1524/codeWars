function reverseOddCount(array){
    let objRes = {};
    // array.forEach(el => {
    //     if(objRes[el] == el) {
    //         objRes.el += 1;
    //     } else if (objRes.el !== undefined) {
    //         objRes.el += 1;
    //     }
    // });

    for(let i = 0; i < array.length; i++) {
        
                    if(objRes[i] !== undefined) {
                        objRes[i] = i;
                    } else if (objRes[i] == i) {
                        objRes[i] = i;
                    }
                }

    return objRes;
  }

  console.log(reverseOddCount(['a', 'a', 'b', 'c', 'c', 'd']));