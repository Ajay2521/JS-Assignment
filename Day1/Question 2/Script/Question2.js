// var , let and const are the keywords used to declare a variable name in JS.

// All three are used for the purpose of declaring the variable.

// But they differ by mean of their scope and functionality in the program.

// var = It is used to declare a variable in mean of global scope. Thus when a variable is declared by var then it can be accessed when ever needed in the program.

// let = It is used to declare a variable locally, thus the variable which is declared by let will have scope only within the block of code.Thus when the variable comes out of the specific block then there is no functionality of that variable anymore in the program.

// const = It is used to declare a variable as a constant variable . Thus once a variable is declared and specified with any value then the value of the variable remains te same throughout the program. Thus const varaible value can't be changed once it is defined.

// Here is the program for var , let , const

// var example: 

// Here variable name , age , city is defined using var thus it has global scope in the program.

var name = "Ajay"

var age = 19

var city = "Chennai"

document.write( "Value of Name is : " +name )

document.write("<br /><br />")

document.write( "Value of Age is : " +age )

document.write("<br /><br />")

document.write( "Value of City is : " +city )

document.write("<br /><br />")

// let example 

{

    // Here name and age is the variable which is already created by using var are used by using let method.

    // by doing so name and age value is changed only inside this let block.
    
    let name = "Maayon"

    let age = 18

    document.write( "Value of Name inside the let block is : " +name )

    document.write("<br /><br />")

    document.write( "Value of Age inside the let block is : " +age )

    document.write("<br /><br />")

    // since only name and age value has changed. City value remains the same and print the value of city which is declared already.

    document.write( "Value of City inside the let block is : " +city )
    
    document.write("<br /><br />")

}

// now lets  see what happen outside the block when name , age , city print.

// It prints the value which is declare using var , since it was declared globally.

document.write( "Value of Name outside the let block is : " +name )

document.write("<br /><br />")

document.write( "Value of Age outside the let block is : " +age )

document.write("<br /><br />")

document.write( "Value of City outside the let block is : " +city )

document.write("<br /><br />")

// const example :

const Name = "Ajay M"

document.write( "Value of Name which is declared as const is : " +Name )

document.write("<br /><br />")

Name = "Maayon A" 

document.write( "Value of Name which is declared as const after change is : " +Name )

// Note : when we try to change the value of a const variable then it will be resulting in error and it own display in the website . To know the error occurance check the chrome developer console.

// Note : document.write("<br /><br />") = I have used this for line break for readability.


 