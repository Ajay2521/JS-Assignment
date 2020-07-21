// Create a Class User with properties as name, age & email.

// He can login and logout

// Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins.

// Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a user.

class User 

{

    constructor(name, age, email) 
    
    {

        this.name = name;

        this.age = age;

        this.email = email;

        this.coins = 0 ;
        
        this.courses = [];
    
    }

    login()
    
    {
    
        console.log(`${this.name} has logged in...`);
    
        return this;
    }

    logout()
    
    {
    
        console.log(`${this.name} has logged out...`);
    
        return this;
    
    }

}

// Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins.

class Moderator extends User

{

    addCoins(user) 
    
    {
        
        return  user.coins++ ;

    }

    removeCoins(user)
    
    {
    
        return  user.coins-- ;

    }

}

// Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a user.

class Admin extends Moderator

{

    addCourse(user,course)
    
    {
    
        user.courses.push(course);
    
    }

    deletCourse(user,course)
    
    {
    
        var index = user.courses.indexOf(course);
        
        if (index > -1) 
        
        {
        
            user.courses.splice(index, 1);
    
        }
   
    }

}

// assigning the values 

let user1 = new User('Ajay',19,'ajayajutheaj@gmail.com');

let user2 = new User('Maayon',19,'m@gmail.com');

let moder = new Moderator('Aj',19,'a@gmail.com');

let admin = new Admin('Aju',19,'aju@gmail.com');

let users = [user1,user2,moder,admin];

user1.login();

//adds 1 into coin, where coin value becomes 1.

moder.addCoins(user1);

//adds 1 into coin, where coin value becomes 2.

moder.addCoins(user1);

//adds 1 into coin, where coin value becomes 3.

moder.addCoins(user1);

// adding course to user1.

admin.addCourse(user1,'python');

console.log(user1);

user1.logout();

user2.login();

// removes 1 from coin, where coin value becomes -1.

moder.removeCoins(user2);

// adding course to user2.

admin.addCourse(user2,'python');

admin.addCourse(user2,'C+');

admin.addCourse(user2,'C');

// let delIndex = Number(prompt("Enter the index of courses element to be deleted : "))

console.log(user2);

// removing one specfic course from user2

admin.deletCourse(user2,'C');

console.log(user2);

user2.logout();

console.log(users);



