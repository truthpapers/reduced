for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    if(array[index] === 'P' /* || array[index] === 'PH' */){
        array[index] = 'B'
    }
    if(array[index] === 'p' /* || array[index] === 'ph' */){
        array[index] = 'b'
    }
    ///////////////////////////
/*     if(array[index] === 'TH'){
        array[index] = 'D'
    }
    if(array[index] === 'th'){
        array[index] = 'd'
    } */
    ///////////////////////////
    if(array[index] === 'V'){
        array[index] = 'F'
    }
    if(array[index] === 'v'){
        array[index] = 'f'
    }
    ///////////////////////////
    if(array[index] === 'J'){
        array[index] = 'G'
    }
    if(array[index] === 'j'){
        array[index] = 'f'
    }
    ///////////////////////////
    if(array[index] === 'Q' || array[index] === 'C' || array[index] === 'S'){
        array[index] = 'K'
    }
    if(array[index] === 'q' || array[index] === 'c' || array[index] === 's'){
        array[index] = 'k'
    }
    ///////////////////////////
/*      if(array[index] === 'U' || array[index] === 'W'){
        array[index] = 'O'
    }
    if(array[index] === 'u' || array[index] === 'w'){
        array[index] = 'o'
    } */
    ///////////////////////////
       if(array[index] === 'Z'){
        array[index] = 'R'
    }
    if(array[index] === 'z'){
        array[index] = 'r'
    }

    
}
////////////////
