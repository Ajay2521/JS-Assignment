// Destructure the object :

// given object :

const student = {

    name : "Helsiniki" ,

    age : 24 ,

    projects: {

        diceGame : "Two player dice game using JavaScript" 
    
    }

}

console.log("printing the values from given source object: ");

console.log(student);

// destructuring the source object.

const { name , age , projects: diceGame} = student;

console.log("printing the values from given source object after destructuring: ");

console.log(name);

console.log(age);

console.log(diceGame);

console.log("The object is destructured successfully...");
