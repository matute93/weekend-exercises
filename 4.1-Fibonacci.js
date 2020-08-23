function fibonacci(n, start){
    let fibonacci = [1, 1];
    for (let i = 2; i <= n; i++){
        fibonacci.push(fibonacci[i-1]+ fibonacci[i-2]);
    }
    if (start === 0){fibonacci.unshift(0)}
    return fibonacci.slice(0, n)
}

console.log(fibonacci(10,5))