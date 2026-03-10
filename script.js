/*
while loop runs from i=0 to i=number adding i to sum on each iteration while increasing i by one.
*/

function sumOfFirstnNumbers(number){
    let sum = 0;
    let i = 0;

    while(i <= number){
        sum = sum + i;
        i++;
    }

    console.log('The sum of first', number, 'numbers is', sum);
}

/*
while loop iterates from i=1 to i=10 and prints number*i while increasing i by 1 on each iteration.
*/
function tableOfNumber(number){
    let i = 1;
    console.log('The table of', number, ':');

    while(i <= 10){
        console.log(number * i);
        i++;
    }
}

/*
a boolean variable prime is set to true and a for loop is run from i=2 to i<number while checking if at any point 
i divides number then prime is set to false and loop is break and after the loop based on the boolean value of
prime the function prints yes or no.
*/

function isPrime(number){
    let prime = true;

    if(number <= 1){
        prime = false;
    }

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            prime = false;
            break;
        }
    }

    if(prime){
        console.log('is it a prime number: Yes');
    } else {
        console.log('is it a prime number: No');
    }
}

/* 
for loop iterates from i=1 to i=number while checking iff number is divisible by i 
if yes then print the value of i otherwise just move to the next iteration.
*/

function printFactors(number){
    console.log('The factors :');

    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            console.log(i);
        }
    }
}

/*
a temp variable is created which stores the value as number and a while loop is run until temp >0
on each iteration the last digit is added to the sum and temp is updated by dividing from 10.
*/

function sumOfDigits(number){
    let sum = 0;
    let temp = number;

    while(temp > 0){
        sum = sum + temp % 10;
        temp = Math.floor(temp / 10);
    }

    console.log('The sum of digits:', sum);
}

/*
a temp variable is created which is equal to the number and a while loop is run on each iteration the 
last digit's cube is added to the sum once the loop ends the sum is compared to the number if equals then
prind true otherwise false.
*/

function isArmstrong(number){
    let sum = 0;
    let temp = number;

    while(temp > 0){
        let digit = temp % 10;
        sum = sum + digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    if(sum === number){
        console.log('is it an armstrong number? : yes');
    } else {
        console.log('is it an armstrong number? : no');
    }
}


/*
a function that performs other function call at once just to ease the process.
*/
function performAllOperations(number){
    console.log('Number:', number);

    sumOfFirstnNumbers(number);
    tableOfNumber(number);
    isPrime(number);
    printFactors(number);
    sumOfDigits(number);
    isArmstrong(number);
}

let variable1 = 10;
let variable2 = 15;
let variable3 = 20;

performAllOperations(variable1);
performAllOperations(variable2);
performAllOperations(variable3);