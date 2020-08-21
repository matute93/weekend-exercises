  
function uniqe(array){
    for (let i = 1; i < array.length-1; i++){
      if (array[i] !== array[i-1] && array[i] !== array[i+1]){
        return array[i];
      }
    }
    if (array[0] !== array[1]){return array[0]}else{return array[array.length -1]}
  }
  console.log(uniqe([1,1,1,3,1]))

