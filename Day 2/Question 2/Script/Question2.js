// lets first see string methods.

document.write( "<hr />" ) ;

document.write( "<h3><b><u>String Methods</u> :</b></h3>" ) ;

// length = used to give the length of the string.

// Note : length function will count space as a value too.

// Here is the exaple for length.

let str = "This is Ajay M. Currently doing Information Technology." ;

document.write( str ) ;

document.write( "<hr />") ;

document.write("1) length method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Length of the string \"str\" including space is : " + str.length ) ;

// indexOf( ) = is used to return the position of the first accurrence of a specified text in a given string.

// Here is the exaple for indexOf( ).

document.write( "<hr />") ;

document.write("2) indexOf( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "First occurence of the letter \"i\" at the postion is : " + str.indexOf( "i" ) ) ;

// lastIndexOf( ) = is used to return the position of the last accurrence of a specified text in a given string.

// Here is the exaple for lastIndexOf( ).

document.write( "<hr />") ;

document.write("3) lastIndexOf( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Last occurence of the letter \"i\" at the postion is : " + str.lastIndexOf( "i" ) ) ;

// Note : if the specified string is not found then both indexof( ) and lastIndexOf( ) will return -1.

// search( ) = is used to searches a string for a specified value and returns the position of the match.

// Here is the exaple for search( ).

document.write( "<hr />") ;

document.write("4) search( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Location of \"M\" at the postion is : " + str.search( "M" ) ) ;

// slice( ) = is used to extracts a part of a string.

// silce( ) take two parameters.They are the start position, and the end position.

// Here is the exaple for slice( ).

document.write( "<hr />") ;

document.write("5) slice( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Sliced value is : " + str.slice( 7 , 31 ) ) ;

// substring( ) = is used to extracts a part of a string.

// Here is the exaple for substring( ).

document.write( "<hr />") ;

document.write("6) substring( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Substring value is : " + str.substring( 15 , 43 ) ) ;

// substr( ) = is used to extracts a part of a string.

// substr( ) take two parameters.They are the start position, and the length of the extracted part.

// Here is the exaple for slice( ).

document.write( "<hr />") ;

document.write("7) substr( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Substr value is : " + str.substr( 7 , 8 ) ) ;

// replace( ) = is used to replaces a specified value with another value in a string.

// Note : It does not change the string it is called on. It returns a new string.

// Here is the exaple for replace( ).

document.write( "<hr />") ;

document.write("8) replace( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Replace value is : " + str.replace( "Ajay" , "Maayon" ) ) ;

// toUpperCase( ) = is used to convert string into upper case letter.

// Here is the exaple for toUpperCase( ).

document.write( "<hr />") ;

document.write("9) toUpperCase( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "String after Upper case conversion is : <br /> <br />" + str.toUpperCase( ) ) ;

// toLowerCase( ) = is used to convert string into lower case letter.

// Here is the exaple for toLowerCase( ).

document.write( "<hr />") ;

document.write("10) toLowerCase( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "String after Lower case conversion is : <br /> <br />" + str.toLowerCase( ) ) ;

// concat( ) = Used to join two or more strings.

// Here is the program for concat( ).

let str1 = " In CIT , Coimbatore."

document.write( "<hr />") ;

document.write("11) concat( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Concat of \"str\" and \"str1\" is : <br /> <br />" + str.concat( str1 ) ) ;

// trim( ) = Used to remove all the whitespace( spaces ) present in the string.

// Here is the program for trim( ).

document.write( "<hr />") ;

str1 = "    This is trimed.         "

document.write("12) trim( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Trimed value of \"str1\" is : <br /> <br />" + str1.trim() ) ;

// charAt = used to returns the character at a specified position in a string.

// Here is the program for charAt( ).

document.write( "<hr />") ;

document.write("13) charAt( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Character at the position 20 is : " + str.charAt( 20 ) ) ;

// charCodeAt = used to returns the unicode of the character at a specified position in a string.

// Here is the program for charCodeAt( ).

document.write( "<hr />") ;

document.write("14) charCodeAt( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Unicode of the character at the position 20 is : " + str.charCodeAt( 20 ) ) ;

// Property Access = used to return the char at that specific value inside square bracket [ ] .

// Here is the program for property Access [ ].

document.write( "<hr />") ;

document.write("15) property access [ ] method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Character at the inside the square bracket is : " + str[ 13 ] ) ;

document.write( "<hr />") ;

// Lets see about Array methods.

document.write( "<hr />" ) ;

document.write( "<h3><b><u>Array Methods</u> :</b></h3>" ) ;

let arr = [ 1, 2, 3, 4, 5 ]

// toString = Used to convert a array to the string.

// Here is the example for toString( ).

document.write( arr ) ;

document.write( "<hr />") ;

document.write("1) toString( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Array to string is : " + arr.toString( ) ) ;

document.write( "<br /> <br />" ) ; 

document.write("Now after converting array to string using toString( ), its datatype is : " + typeof (arr.toString( ) ) ) ;

// join( ) = Used to convert a array to the string.

// Here is the example for join( ).

document.write( "<hr />") ;

document.write("2) join( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Array to string is : " + arr.join( ) ) ;

document.write( "<br /> <br />" ) ; 

document.write("Now after converting array to string using join( ), its datatype is : " + typeof (arr.join( ) ) ) ;

// pop( ) = Used to remove the last element from an array.

// Here is the example for pop( ).

document.write( "<hr />") ;

document.write("3) pop( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Removing last element from array using pop( ) is : " + arr.pop( ) ) ;

document.write( "<br /> <br />" ) ; 

document.write( "After removing last element from array using pop( ) and array becomes : " + arr ) ;

// push( ) = Used to push or add the last element to an array.

// Here is the example for push( ).

document.write( "<hr />") ;

document.write("4) push( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Adding a element to an array using push( ) is : " + arr.push( 5 ) ) ;

document.write( "<br /> <br />" ) ; 

document.write( "After adding a new element to array using push( ) and array becomes : " + arr ) ;

// shift( ) = Used to remove the first element from an array.

// Here is the example for shift( ).

document.write( "<hr />") ;

document.write("5) shift( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Removing first element from array using shift( ) is : " + arr.shift( ) ) ;

document.write( "<br /> <br />" ) ; 

document.write( "After removing first element from array using shift( ) and array becomes : " + arr ) ;

// unshift( ) = Used to push or add the new element at the first position of an array.

// Here is the example for unshift( ).

document.write( "<hr />") ;

document.write("6) unshift( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Adding a new element to an array at the starting of an array using unshift( ) is : " + arr.unshift( 1 ) ) ; // return 5 , since length of the array is 5 after adding.

document.write( "<br /> <br />" ) ; 

document.write( "After adding a new element to array at the starting of an array using push( ) and array becomes : " + arr ) ;

// idexing array [ ] = Used to access the array value using index.

// Here is the example for index of arr[ ].

document.write( "<hr />") ;

document.write("7) index of arr[ ] method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Array value at the index[ 3 ] is : " + arr[ 3 ] ) ; // return 5 , since length of the array is 5 after adding.

// length = used to give the length of the array.

// Here is the example for length.

document.write( "<hr />") ;

document.write("8) length method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Length of the array \"arr\" is : " + arr.length ) ;

// delete = Used to delete an array element at a specific index

// Here is the example for delete method.

document.write( "<hr />") ;

document.write("9) delete method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Is delete is applied : " + delete arr[ 3 ] ) ; // returns true or false based on implementation.

document.write( "<br /> <br />" ) ; 

document.write("Array \"arr\" after delete is : " + arr );

// concat( ) = Used to merge two or more arrays.

// Here is the program for concat( ).

arr = [ 1, 2, 3, 4, 5];

let arr1 = [ 6, 7, 8, 9, 10 ] ;

document.write( "<hr />") ;

document.write("10) concat( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Concat of \"arr\" and \"arr1\" is : <br /> <br />" + arr.concat( arr1 ) ) ;

// slice ( ) = used to slice out an element from an array.

// Here is an example for slice( ).

document.write( "<hr />") ;

document.write("11) slice( ) method :" );

document.write( "<br /> <br />" ) ; 

document.write( "Sliced out element is : " + arr.slice( 1 ) ) ;

document.write("<hr /");


