function binary(array){
    let dec = 0;
    for (let i = 0; i < array.length; i++){
      if (array[array.length-i-1] === 1){dec += 2**i}
    }
    return dec;
  }

  console.log(binary([1,0,1,0]))

