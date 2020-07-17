// Getting the OS name and it version from user and assign it to a variable.

let nameVersion = prompt("Enter your OS Name and its Version.\n\nNote : Use space to separate OS Name and its version." );

// spliting the OSName and Version of it separately and assigned the value to the separate variable.

let OSName = nameVersion.split(" ")[0];

let Version = nameVersion.split(" ")[1];

// loging the OsName and it version in console in desired format.

console.log(`The OS name is ${OSName} and its version is ${Version}.`);



