function duplicateCount(str){
    str = str.toLowerCase();
    let letters = '';
    let count = 0;
    let counted = '' ;
    for (let i = 0; i < str.length; i++) {
        if (letters.includes(str[i]) && !(counted.includes(str[i]))){
            count++;
         counted = counted.concat(str[i]);
     }
        else {
            letters = letters.concat(str[i]);
        }
    }
    return count;
}
console.log(duplicateCount('Extrabaganza'))

//  ???