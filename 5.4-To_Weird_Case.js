function toWeirdCase(string){
    let  newString = [];
    for( let i=0; i< string.length; i++) {
        if(i%2 == 0){
            newString.push(string[i].toUpperCase());
        } else {
            newString.push(string[i].toLowerCase());
        }
    }
    return newString.join('');
};
console.log(toWeirdCase('hEllo world'))