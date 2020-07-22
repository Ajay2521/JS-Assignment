// Program to make welcom message with user name and displaying time and apply drak mode using toggle method in classList add:

const name = prompt("Enter your name","Anonymous");

const title = document.getElementById('title');

title.innerHTML += `Welcome ${name}...`;

const curtime = document.getElementById('time');

function displayTime(){
    
    let date = new Date();
    
    let time = date.toLocaleTimeString();
    
    curtime.innerText = time;

}

setInterval( displayTime, 1000 );

function darkMode() 
{

    let dark = document.body;

    dark.classList.toggle("dark-mode");

}
