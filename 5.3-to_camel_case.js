function toCamelCase(str){
  newString =  str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace(/-|_/g, "");
  return newString;
}
console.log(toCamelCase('mati-As'))