
/*
    Named function is used to find the maximum number in the array by iterating over the whole array
    and updating the max value if the current number is larger than the max value.
*/
function maximumNumberInArray(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

/*
    anonymous function is used to find sum of all the eleents in the array by iterating over the whole array
    updating the sum value by adding the current element value to it. 
*/
let sumOfAllElementsInArray = function (array){
    let sum = 0;
    for(let i =0; i<array.length; i++){
        sum = array[i]+sum;
    }
    return sum;
}

/*
    arrow function is used to find the number of odd functions in an array by iterating over the whole array
    and finding the modulo 2 of each element and updating the count variable accordingly.
*/
let numberOfOddNumbersInArray = (array)=>{
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0){
            count++;
        }
    }
    return count;
}

let exampleArray = [1,2,3,4,5,6,7,8,9,10,-1,230,99,-1002];
console.log("Example Array:-", exampleArray);
console.log("Maximum number:" + maximumNumberInArray(exampleArray));
console.log("Sum of all elements:" + sumOfAllElementsInArray(exampleArray));
console.log("Number of odd numbers:",numberOfOddNumbersInArray(exampleArray));