
let num = Number(prompt("Enter a number for creating multiplication table."));
    
let table = '';

document.write(`Multiplication table for ${num} is :<br /><br/>`)

function multiTable()
            
{
    
    for (i=1; i<=15; i++) 
    
    {
    
        table += num + " x " + i + " = " +(num*i)+ "<br /><br />";  
    
    }

    document.write(table);

}


