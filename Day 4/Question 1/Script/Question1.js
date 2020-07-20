// write code for "forloop to iterate 1 to 100" , print "fizz"  instead of numbers multiply of 3 , "buzz" instead of numbers multiply of 5 and "fizzbuzz" instead of numbers multiply by both 3 and 5.

console.log("for Loop has started...");

for ( let i = 1 ; i <= 100 ; i++ ) 

{

    if ( i % 3 == 0 && i % 5 == 0 )
    
    {

        console.log("fizzbuzz");
        
        continue;

    }

    else if ( i % 3 == 0 )
    
    {

        console.log("fizz");
        
        continue;
        
    }

    else if ( i % 5 == 0 )
    
    {

        console.log("buzz");
        
        continue;
        
    }
    
    else
    
    {

        console.log( i );
        
        continue;
        
    }

}