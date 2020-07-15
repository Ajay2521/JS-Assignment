// There are various console method available in javascript like

// log( )

// error( )

// warn( )

// clear( )

// time( ) and timeEnd( )

// table( )

// count( )

// group( ) and groupEnd( )

// custom console logs

// lets see one by one


// clear( ) :

// clear( ) = Is used to clear the console.

// Note : In Chrome a simple overlayed text will be printed like : ‘Console was cleared’.

// Note : Since clear() will clear everyother console which is created before.

// Therefore it is good to use before all other console in the program.

console.clear( );

// log ( ) :

// log( ) = Is console method which is used print the data. Thus it is mainly used to print the output to the console.

// Any datatype can be passed to the log( ) like int, string, array, object etc..,

// Here is the Exaple for log( ).

console.log( 10 ); // int type.

console.log( "Ajay M" ); // String type.

console.log( true ); // boolean type.

console.log( [ 1, 2, 3, 4, 5 ] ); // array type.

// error ( ) :

// error( ) = Is used to throw error message to the console. Useful in testing of code.

// Note : By default the error message will be highlighted with read color.

// Here is the Exaple for error( ).

console.error( 'Error message had displayed...' ); 

// warn ( ) :

// warn( ) = Is used to throw warning message to the console. Useful in testing of code.

// Note : By default the warning message will be highlighted with yellow color.

// Here is the Exaple for warn( ).

console.warn( 'Warning message had displayed...' ); 

// time( )  and timeEnd( ) :

// time( ) & timeEnd( ) = Is used to know the amount of time spend by a block or function in the program.

// Here is the Exaple for time( ) & timeEnd( ).

console.time( 'log execute time is ' );

console.log( 'log is excuted...');

console.timeEnd( 'log execute time is ' );

// table( ) :

// table( ) = Is used to generate a table inside a console forr the input data items or array. 

// Here is the example for table( ).

console.table( { 1 : 'One' , 2 : 'Two' , 3 : 'Three' } )

// count( ):

// count( ) = Is used to count the number of iteration has been used in the program.

// Here is the program for count( ).

for ( let i = 0 ; i < 2 ; i++)
{

    console.count( 'count is executed for ' );

}

// group( )  and groupEnd( ) :

// group( ) & groupEnd( ) = Is used to group content in a separate block just like time( ) and timeEnd( ).

// Here is the Exaple for group( ) & groupEnd( ).

console.group( 'Here is the group for log :' );

console.log( 'log is excuted for first time in a group...');

console.log( 'log is excuted for second time in a group...');

console.groupEnd( 'Here is the group for log :' );

// Custom Console Logs :

// Custom Console Logs = Is used to add styling and user choose console log.

// %c is used to denote it is custom console log defined by user.

// Here is the program for custom console log :

console.log( '%c Custom Console log has displayed here...', 'color : red ' )

