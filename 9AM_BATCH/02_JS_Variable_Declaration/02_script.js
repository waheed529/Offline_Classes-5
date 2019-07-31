// Variable Declaration
let num1 = 100;
let num2 = 20;
let sum = num1 + num2;
console.log('The Sum of ' + num1 + ' , ' + num2 + ' is : ' + sum); // ES5
console.log(`The Sum of ${num1} , ${num2} is : ${sum}`); // ES6

// Rules for Variable Declaration
// 1) a-z , A-Z , 0-9 , _ , $ (must not start with number)
// 2) all variables are case sensitive
// 3) must use camel case letters
// 4) variable names must be shorten (15 chars)
// 5) Redeclaration of variable is not allowed

let _name = 'John';
console.log(_name);

// Camel Case
let empName = 'Wilson';
console.log(empName);

//
let course = 'JavaScript';
course = 'Node JS';
console.log(course);