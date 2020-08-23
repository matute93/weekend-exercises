function isogram(str){
    let array = str.toLowerCase().split('');
    array.sort();
    let iso = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i-1]){iso = false; break}
        
    }
    return iso
}
console.log(isogram('mati'))