function numbers(...numbers){
    let sum = 0;
    for (let i of numbers){
        sum += i;
    }
    console.log("Sum: " + sum)
}
numbers(1,2,3,4,5,6)