// Write the code which outputs prime numbers in the interval from 2 to n:

let n = Number(prompt("Enter a value to find series of prime number : " ) ) ;

console.log(`series of prime number till the value of ${n} with interval of 2 is :`);

seriesPrime:

for( let i = 2 ;  i <=n ; i++ )

{

    for( let j = 2; j < i ; j++ )
    {

        if( i % j == 0 ){

            continue  seriesPrime;

        }

       

    }

    console.log(i);

}