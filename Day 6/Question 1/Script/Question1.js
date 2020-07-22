// Program that will iterate over an array of colors and change the background of the page after 5 seconds.

const list = document.querySelector('#arrColor');

let colors =[ 'Red', 'Blue', 'Orange', 'Black', 'White', 'Pink' ];

// displaying array of colors in the website.

colors.forEach(colors => {

    list.innerHTML += `<li>${colors}</li><br />`;

})

function changeColor()

{
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

}

setInterval(changeColor,5000);
