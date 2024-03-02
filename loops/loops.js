// 1
let numbers = ''
for (let i = 20; i <= 30; i += 0.5) {
    numbers += `${i} `;
}
console.log(numbers)

// 2

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i}$ = ${i * 38}₴`)
}

// 3

const number = 144;

for(i = 1; i <= 100; i++){
    if (i * i <= number){
       console.log(i)
    }
}

// 4

const userNum = +prompt('Enter a number: ');

let isPrime = true; // use flag-variable
for(let i = 2; i < userNum; i++){
    if(userNum % i == 0){
        isPrime = false;
    }

}
if(!isPrime) {
    alert('This number is not prime');
}
else{
    alert('This number is prime')
}

// 5

const userNumber = 81;
let checkNumber = false;

for(let i = 1; i < 20; i++) { // for example, 20. 
    if(3 ** i == userNumber){
        checkNumber = true
    }
    
}

if(checkNumber) {
    console.log(`${userNumber} is the power of the number 3`)
}
else{
    console.log(`${userNumber} is not any power of number 3`)
}


