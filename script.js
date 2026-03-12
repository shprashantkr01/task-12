
const division = (numerator, denominator)=>{
    return new Promise((resolve, reject)=>{
        if(denominator===0){
            reject("Division by zero not allowed");
        }else{
            resolve(numerator/denominator);
        }
    })
}

division(10,0).then((result)=>{
    console.log("RESULT :",result);
}).catch(error=>{
    console.log("ERROR :",error);
})

division(23,127).then(result=>{
    console.log("RESULT :",result);
}).catch(error=>{
    console.log("ERROR :",error);
})

division(-279,87).then(result=>{
    console.log("RESULT :",result);
}).catch(error=>{
    console.log("ERROR :",error);
})

division(-125,-5).then(result=>{
    console.log("RESULT :",result);
}).catch(error=>{
    console.log("ERROR :",error);
})