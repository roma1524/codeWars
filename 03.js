var isAnagram = function(test, original) {
    let str = toSort(test);  //  Преобразовываем аргуем к одному регстру / разбиваем на массив / и приминяем стандартную сортировку
    let strOrg = toSort(original) //  Преобразовываем аргуем к одному регстру / разбиваем на массив / и приминяем стандартную сортировку
    
    if(str.length !== strOrg.length) {  // Проверяем, если длины массива разные, то сразу false
        return false;
    } else {
        for(let i = 0; i < strOrg.length; i++) { // у нас аргументы отсортированы, и поэтому, должны быть в одинаковой последовательности, и если мы встречаем первое не совпадение, то можем смело возвращать false
            if(str[i] !== strOrg[i]) {
                return false
            }
        }
    }
    return true;  // если все проверки пройдены, то возвращаем true
    };
    
    function toSort (arg)  {  // Функция создана для удобства, чтобы не дублировать rjl
        return arg.toLowerCase().split('').sort();
    }
    
    console.log(isAnagram("Buckethead", "DeathCubeK"));
    