/*
    number -> for numerical data
    string -> for string type of data
    boolean -> true , false
    undefined -> default value for any variable
    null -> dummy value for a variable

 */

// undefined
let abc;
console.log(`value : ${abc} => Type : ${typeof abc}`);

// String
let empName = 'John';
console.log(`value : ${empName} => Type : ${typeof empName}`);

// Number
let empSalary = 85000;
console.log(`value : ${empSalary} => Type : ${typeof empSalary}`);

// Boolean
let isManager = true;
console.log(`value : ${isManager} => Type : ${typeof isManager}`);

// Null
let isMarried = null;
console.log(`value : ${isMarried} => Type : ${typeof isMarried}`);

// Re-assignment of Variables
let test;
console.log(`value : ${test} => Type : ${typeof test}`);

test = 'John';
console.log(`value : ${test} => Type : ${typeof test}`);

test = 10000;
console.log(`value : ${test} => Type : ${typeof test}`);

test = true;
console.log(`value : ${test} => Type : ${typeof test}`);

test = null;
console.log(`value : ${test} => Type : ${typeof test}`);