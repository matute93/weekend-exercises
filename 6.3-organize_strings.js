function organizeString(s1, s2){
    let array = s1.split('').concat(s2.split(''));
    array = array.sort();
    let string = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i-1]){ string= string.concat(array[i])} 
    }
    return string;
}
console.log(organizeString('extrabaganza','yokalele'))