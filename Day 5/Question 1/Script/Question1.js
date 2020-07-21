// Write a program which does the following things:

// 1. Takes a positive number from the user.

// 2. Makes an array of numbers till the number given by user

// 3. Use higher order function to filter the odd numbers

// 4. Generate and array of the cubes of the filtered numbers -->


// 1. Takes a positive number from the user.

let n = Number(prompt("Enter the number till which array list has to be build:") ) ;

// empty array

let arr = [];

// 2. Makes an array of numbers till the number given by user

for( let i = 1; i <= n ; i++ )

{

    arr.push(i);

}

console.log("Array elements are...");

console.log(arr);

// 3. Use higher order function to filter the odd numbers

let oddArr = arr.filter(arr => arr % 2 != 0 );

console.log("ODD numbers in the array elements is...");

console.log(oddArr);

// 4. Generate and array of the cubes of the filtered numbers -->

let cubesFilteredArr = oddArr.map(oddArr => oddArr ** 3);

console.log("Cubes of the filtered array elements is...");

console.log(cubesFilteredArr);
