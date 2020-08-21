function basicMath (op, a, b){
    if (op === '+'){
        return a+b;
    }
    else if (op ==='-'){
        return a-b
    }
    else if (op ==='*'){
        return a*b
    }
    else if (op ==='/'){
        return a/b
    }
}
console.log(basicMath('+', 5,2))