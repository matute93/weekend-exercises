let numbers = [6, 10 , 4 ,55, 66,  345, 23, 67,965];
 
function sumLowestNumbers(array) {
    let result = array.sort((a, b) => a - b).slice(0, 2);
    let sum = 0;
    for(i = 0; i < result.length; i++){
    sum += result[i];
    }
    return sum;
    }
console.log(sumLowestNumbers(numbers))
