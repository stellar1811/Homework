function getAdder() {
    let sum = 0;

    return function(number) {
        sum += number;
        console.log(sum);
    };
}

const addNumber = getAdder();
addNumber(4); 
addNumber(10); 
addNumber(5); 