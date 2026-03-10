const number1 = 2;
const number2 = 5;
const number3 = -123;
const number4 = 0;
const number5 = 123948567;

function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(number, "Is even");
    }
    else {
        console.log(number, "Is Odd");
    }
}

evenOrOdd(number1);
evenOrOdd(number2);
evenOrOdd(number3);
evenOrOdd(number4);
evenOrOdd(number5);