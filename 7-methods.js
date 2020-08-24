let array = [1 , 2 , 3 , 4 ];

function myMap (array, func){
    let newArray= [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(func(array[i], i, array))
            }
            return newArray;
}
function func(num){
    num = num * 2
    return num;
}
console.log(myMap(array, func));


// ------------------------------------------------------------


function myForEach (array, func){
    for (let i = 0; i < array.length; i++) {
      array[i] = func(array[i])
            }
            return array;
}
function func(num){
    num = num * 2
    return num;
}
console.log(myForEach(array, func));

// ------------------------------------------------------------

function myFilter (array, func){
    let newArray2 = [];
    for (let i = 0; i < array.length; i++) {
      newArray2.push(func(array[i]));
               }
            return newArray2;
}
function func1(num){
    if (num % 2 ===0){ return num;}
}
console.log(myFilter([1,2,3,4], func1));
