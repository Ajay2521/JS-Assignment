// There are various datatype available in javascript like

// lets see one by one

// String - Datatype :

// String datatype is defined as a collection of characters or sequence of character.

// Anything which present inside single quote ( ' ' ) or double quotes ( " " ) are treated as a string datatype.

// Here is the example for string datatype.

var Name = "Maayon"; // String using double quotes.

var age = '19'; // even-though 19 is a number , but when it is present inside the single quotes it is treated as a string datatype only.

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>String Datatype :</b></u> " );

document.write( "<br /><br />" );

document.write( "Value of Name is : " + Name );

document.write( "<br /><br />" );

// typeof = used to find the data type of a variable.

document.write("Datatype of Name is : " + typeof( Name ) );

document.write( "<br /><br />" );

document.write( "Value of Age is : " + age );

document.write( "<br /><br />" );

document.write("Datatype of Age is : " + typeof( age ) );

document.write( "<br /><br />" );

// Number - Datatype :

// Number = Is used to represent positive or negative numbers with or without decimal place, or numbers written using exponential notation.

// Here is the program for Number datatype.

let a = 10 ; // integer

let b = 10.234 ; // floating point

let c = 10.25e+4 ; // eexponential notation

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Number Datatype :</b></u> " );

document.write( "<br /><br />" );

document.write("Value of \"a\" is : " + a);

document.write( "<br /><br />" );

document.write("Datatype of \"a\" is : " + typeof( a ) );

document.write( "<br /><br />" );

document.write("Value of \"b\" is : " + b );

document.write( "<br /><br />" );

document.write("Datatype of \"b\" is : " + typeof( b ) );

document.write( "<br /><br />" );

document.write("Value of \"c\" is : " + c);

document.write( "<br /><br />" );

document.write("Datatype of \"c\" is : " + typeof( c ) );

document.write( "<br /><br />" );

// Boolean - Datatype :

// Boolean - It hold only two value they are true or false.

// returns true if the value is true.

// returns false if the value is false.

// Here is the example for boolean.

let Bool = true ;

let Bool1 = false ;

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Boolean Datatype :</b></u> " );

document.write( "<br /><br />" );

document.write("Value of \"Bool\" is : " + Bool );

document.write( "<br /><br />" );

document.write("Datatype of \"Bool\" is : " + typeof( Bool ) );

document.write( "<br /><br />" );

document.write("Value of \"Bool1\" is : " + Bool1 );

document.write( "<br /><br />" );

document.write("Datatype of \"Bool1\" is : " + typeof( Bool1 ) );

document.write( "<br /><br />" );

// Undefined - Datatype :

// Undefined = When a variable is created but no value has been assigned to that variable. Then that variable is considered as a undefined datatype.

// Here is the example for undefined.

let x ;

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Undefined Datatype :</b></u> " );

document.write( "<br /><br />" );

document.write("Value of \"x\" is : " + x );

document.write( "<br /><br />" );

document.write("Datatype of \"x\" is : " + typeof( x ) );

document.write( "<br /><br />" );

// Null - Datatype :

// Null = When a variable is created with "null" value . Then that variable is considered as a Null datatype.

// Here is the example for undefined.

let y = null ;

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Null Datatype :</b></u> " );

document.write( "<br /><br />" );

document.write("Value of \"y\" is : " + y );

document.write( "<br /><br />" );

document.write("Datatype of \"y\" is : " + typeof( y ) );

document.write( "<br /><br />" );

// Object - Datatype :

// Object = Is a datatype used to store collection of data in a object.

// Note the value of Object can only display in console , so do check the chrome developer console for Object values.

// Here is example for Object.

var empObject = { } ;

let Data = { "Name" : "Ajay" , "Age" : 19 } ;

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Object Datatype :</b></u> " );

document.write( "<br /><br />" );

document.write("Value of \"empObject\" is : " + empObject );

console.log(empObject) // displaying Object value in the console.

document.write( "<br /><br />" );

document.write("Datatype of \"empObject\" is : " + typeof( empObject ) );

document.write( "<br /><br />" );

document.write("Value of \"Data\" is : " + Data );

console.log(Data);// displaying Object value in the console.

document.write( "<br /><br />" );

document.write("Datatype of \"Data\" is : " + typeof( Data ) );

document.write( "<br /><br />" );

// Array - Datatype :

// An array is a type of object used for storing multiple values in single variable.

// Each element in an array has a unqiue number called index value , which is used to access the elements of that index.

// note : Index value always starts from 0 and end  n-1 value of an array.

// Here is the program for array.

let arrValue = [ 1, 2, 3, 4, 5 ]

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Array Datatype :</b></u> " );

document.write( "<br /><br />" );

for (let i in arrValue)

{

    document.write("Value of \"arrValue\" at " + i +"th position is : " + arrValue [ i ] );

    document.write("<br /><br />")

}

document.write("Datatype of \"arrValue\" is : " + typeof( arrValue ) );

document.write( "<br /><br />" );

// function - Datatype :

// function =  Is callable object that executes a block of code. 

// Here is an example for function: 

document.write( "<hr />" );

document.write( "<br /><br />" );

document.write( "<u><b>Function Datatype :</b></u> " );

document.write( "<br /><br />" );

function printFun( )

{

    document.write( "Function is called and it is displayed succesfully..." ) ;
 
    document.write( "<br /><br />" );

}

document.write( printFun() );

document.write("Datatype of \"printFun\" is : " + typeof (printFun) );

document.write( "<br /><br />" );

document.write( "<hr />" );
