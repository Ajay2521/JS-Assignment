// Getting mark as user input value and assig it to a varaible.

let mark = Number( prompt( "Enter the mark :" ) );

// using if else if to grade based on the mark.

let grade = null ;

console.log("Using if else if condition :");

if ( mark < 0 || mark > 100)

{

    console.error("Your have entered the invalid number.")

}

else if (mark >= 90 || mark == 100)

{

    grade = "O";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

else if (mark >= 80 && mark < 90)

{

    grade = "A+";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

else if (mark >= 70 && mark < 80)

{

    grade = "A";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

else if (mark >= 60 && mark < 70)

{

    grade = "B+";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

else if (mark >= 50 && mark < 60)

{

    grade = "B";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

else if (mark >= 40 && mark < 50)

{

    grade = "C+";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

else 

{

    grade = "FAIL";

    console.log(`Mark is ${mark} and garde is ${grade}.`);

}

// using switch

console.log("Using Switch case : ")

switch(true)
{

    case mark < 0 || mark > 100 :

        console.error("Your have entered the invalid number.")

        break;
        
    case mark >= 90 :

    case mark == 100 :

        grade = "O";

        console.log(`Mark is ${mark} and garde is ${grade}.`);
        
        break;

    case mark >= 80 && mark < 90 :

        grade = "A+";

        console.log(`Mark is ${mark} and garde is ${grade}.`);
        
        break;

    case mark >= 70 && mark < 80 :

        grade = "A";

        console.log(`Mark is ${mark} and garde is ${grade}.`);
        
        break;

    case mark >= 60 && mark < 70 :

        grade = "B+";
    
        console.log(`Mark is ${mark} and garde is ${grade}.`);
            
        break;
        
    case mark >= 50 && mark < 60 :

        grade = "B";

        console.log(`Mark is ${mark} and garde is ${grade}.`);
        
        break;

    case mark >= 40 && mark < 50 :

        grade = "C";

        console.log(`Mark is ${mark} and garde is ${grade}.`);
        
        break;

    default :

        grade = "FAIL";

        console.log(`Mark is ${mark} and garde is ${grade}.`);
        
        break;
    
}