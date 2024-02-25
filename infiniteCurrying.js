// Currying function

// function multiply(x) { // x=2
//     return function(y) {
//         return function(z) {
//             return x * y * z;
//         }
//     }
// } 

// const result = multiply(1)(2)(3)
// console.log(result);


// Infinite Currying function

function multiply(x) { // x = 1
    return function(y) { // y = 2
        if(y){
            return multiply(x * y);
        } else  {
            return x;
        }
    }
}

const result = multiply(1)(2)(3)(4)(5)
console.log(result());