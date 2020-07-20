//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again:

let userNum ;

do{

    userNum = Number(prompt("Enter a number which must be greater than 100: \n\nNOTE : If number entered is not greater than 100 the prompt continue :",100) );

} while(userNum <= 100 );

