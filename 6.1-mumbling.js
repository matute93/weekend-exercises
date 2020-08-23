function mumble (str){
    let mumble = '';
    let letter= '';
    for (let i = 0; i < str.length; i++) {
        letter = str[i];
        mumble= mumble.concat(letter);
        letter = letter.toLowerCase();
        mumble= mumble.concat(letter.repeat(i));
        mumble = mumble.concat('-');
    }
    return mumble;
}

console.log(mumble('matias'))