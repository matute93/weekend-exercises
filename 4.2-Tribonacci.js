  
function tribonnaci(n, start){
    let tribonnaci = [1, 1, 1];
    for (let i = 3; i <= n; i++){
        tribonnaci.push(tribonnaci[i-1]+ tribonnaci[i-2] + tribonnaci[i-3]);
    }
    if (start === 0){tribonnaci.unshift(0)}
    return tribonnaci.slice(0, n)
}
console.log(tribonnaci(10,1))