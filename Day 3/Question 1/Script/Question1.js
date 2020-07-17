// Getting the value from user and assigning it to the variable.

let Value = Number( prompt ( "Enter any number to check whether the number is even or odd:" ) ) ;

// function to check odd or even by passing a parameter.

function oddOrEven( Value )
{

    // if condition to check for even condition.

    if ( Value % 2 == 0 ) 
    {

        console.log(`The number entered is ${Value} and Number is an even number.`);

    }

    // else block , when if condition will be executed by considering that the number is odd number.

    else
    {

        console.log(`The number entered is ${Value} and Number is an odd number.`);

    }

}

// calling the function.

oddOrEven( Value );

