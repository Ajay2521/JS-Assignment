// Salary calucation based on sales:

let sales = Number(prompt("Enter number of sales done by the employee during this year: ") );

let reward;

// Sales from 0-5000 :

if (sales <= 5000 && sales >= 0 )

{

    reward = (sales*0.02);

    console.log(`Total commission earned is : ${reward}`);

}

// Sales from 5000 - 10000:

else if (sales >= 5001 && sales <= 10000 )

{

    reward = (sales*0.05);

    console.log(`Total commission earned is : ${reward}`);

}

// Sales from 10001 - 20000 :

else if (sales >= 10001 && sales <= 20000 )

{

    reward = (sales*0.07);

    console.log(`Total commission earned is : ${reward}`);

}

// Above 20000 :

else 

{

    reward = (sales*0.10);

    console.log(`Total commission earned is : ${reward}`);

}
