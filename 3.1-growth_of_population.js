function growing(p0, percent, aug, p){
    let years= 0;
    let i = 0;
    if (p0*percent + aug <= 0){ return 'no'}
    while (p0 < p){
        p0 += p0 * percent + aug;
        years++;
        i++
    }
    return ' population will get to ' + p + ' in ' + years + ' years'
}
console.log(growing(1500, 5, 100, 5000))

// ???????????