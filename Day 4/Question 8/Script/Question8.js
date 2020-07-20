// Replace Function Expressions with arrow functions in the given code:

let funcAsk = (question, yes, no) => {

    if(confirm(question)) yes();

    else no();
    
}

funcAsk(

    "Do you agree?\n\nIf yes, then click OK\n\nElse click cancle:  " ,    

    () => console.log("User agreeded it."),
    
    () => console.log("User denied it.")

);