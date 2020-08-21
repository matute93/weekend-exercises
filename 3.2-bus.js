function bus(array){
    let people = 0;
    for (let i = 0; i < 1; i++) {
        people += (array[0] - array[1]);
        if (people < 0){
            people=0;
        }
    }
    return people;
}
console.log(bus([30,10]))
