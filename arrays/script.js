const array =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1 

const result = array.reduce(function(acc, current) {
    if(current > 0){
       return acc + current;
    } else {
       return acc;
    }
}, 0);

const count = array.filter(function(num) {
    return num > 0;
}).length;

console.log(result, count);


// 2

let minNumber = 0;
let minIndex = 0;
array.forEach(function(item, i){
    if(item < minNumber){
        minNumber = item;
        minIndex = i;
    }
})
console.log(minNumber, minIndex)


// 3 

let maxNumber = 0;
let maxIndex = 0;
array.forEach(function(item, i){
    if(item > maxNumber){
        maxNumber = item;
        maxIndex = i;
    }
})
console.log(maxNumber, maxIndex)


// 4 

const countNegative = array.reduce(function(acc, current) {
    if(current < 0){
       return acc + 1
    }
    else{
        return acc
    }
},0)
console.log(countNegative)

// 5 

const countOdd = array.reduce(function(acc, current) {
    if(current > 0 && current % 2 !== 0){
        return acc + 1
    }
    else{
        return acc
    }
},0)
console.log(countOdd)

// 6

const countEven = array.reduce(function(acc, current) {
    if(current > 0 && current % 2 == 0){
        return acc + 1;
    }
    else{
        return acc
    }
}, 0)
console.log(countEven)

// 7 


const sumEven = array.reduce(function(acc, current) {
    if (current > 0 && current % 2 == 0) {
        return acc + current;
    }
    return acc
}, 0)
console.log(sumEven)

// 8 

const sumOdd = array.reduce(function(acc, current) {
    if (current > 0 && current % 2 !== 0) {
        return acc + current;
    }
    return acc
}, 0)
console.log(sumOdd)

// 9 

const multiplyPos = array.reduce(function(acc, current) {
    if (current > 0) {
        return acc * current;
    }
    return acc
}, 1)
console.log(multiplyPos)

// 10 

let maxNum = 0;

array.forEach(function(item, i){
    if(item > maxNum){
        maxNum = item;
    }
})

const newArray = array.map(function(item, i){
    if(item !== maxNum) {
        return 0;
    }
    else{
        return maxNum
    }
})
console.log(newArray)