function shortestWord(string){
  let array = string.split(' ');
  short=array[0].length;
  for (let i = 0; i < array.length; i++) {
      if (array[i].length < short){
          short= array[i].length
      }
      
  }
  return short;
}


console.log(shortestWord('Mr. Matias Bruschtein'))