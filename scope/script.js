// Scope is a certain region of a program where a define variable exist and can be recognize and beyond that it cannot be recognize.

// In JavaScript, the term "scope" refers to the context in which variables, functions, and objects are accessible during runtime. JavaScript has function-level scope, which means that variables declared inside a function are only accessible within that function unless explicitly exposed.

// Types of scope
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope

// --------------------

// 1. Global Scope: Variables declared outside of any function have global scope. They can be accessed from anywhere in the code, including other scripts and functions.
// Example:
var globalVar = 10;

function foo() {
    console.log(globalVar); // accessible
}


// 2. Function Scope: Variables declared inside the function are limited to that function's scope and are inaccessible outside of it.
// Example:
function foo() {
    var localVar = 20;
    console.log(localVar); // accessible
}
// console.log(localVar); // Error: localVar is not defined


// 3. Introduced in ES6 (ECMAScript 2015), block scope refers to the scope of variables defined within blocks denoted by curly braces `{}` such as if statements, for loops, and while loops.
// Example:
if(true) {
    let blockVar = 30;
    console.log(blockVar); // accessible
}
// console.log(blockVar); // Error: blockVar is not defined

// Lexical Scope (Closure): Lexical scope means that the scope of a variable is determined by its location within the source code. This concept is essential for understanding closures, where inner functions have access to variables declared in their outer (enclosing) functions even after the outer function has finished executing.
// Example:
function outer() {
    var outerVar = 20;

    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();



// -----------------------------------------


// Shadowing
// Shadowing happens when you have a variable with the same name in different levels of your code, like inside a function and outside it. When you use the variable name inside a smaller scope (like inside a function), it's shadow's or hides the variable with the same name from the outer scope.
// Example:
function shadow() {
    let a = "Hello";

    if(true) {
        let a = "Hi";
        console.log(a);
    }
    console.log(a);
}
shadow();
// In this example if try `let` variable with `var` then error will throw as a variable is already declared which is called as illegal shadowing



// Declaration
// Declaration refers to the process of introducing variables, functions, classes, or other constructs into your code.

var a;
var a;
// We can redeclare the var variable without any error, And cannot do the same with 'let' and 'const'

// Declaration without intialisation
// In 'var' and 'let' we can declare it without initialization but not in the case of 'const' it required initialisation. So 'var' and 'let' can be updated but not in 'const'


// Hoisting
// During the creation phase javascript engine moves your variable and function declaration into the top of your code and this is called hoisting

// Temporal dead zone
// Temporal dead zone is where the variable in the scope but not yet declared
// Temporal dead zone is the time between declaration and initialisation of let & const variable