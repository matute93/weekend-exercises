// function mask(string){
//     newString = string.replace(/.{4})/g, "*");
//     return newString;
// }

function mask(string){
let newString= "";
for (let i = 0; i < string.length; i++) {
    newString = newString.concat('#')
}
newString= newString.concat(string.substr(string.length-4));
return newString;
}




console.log(mask('Matias Bruschtein'))