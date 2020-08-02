const addButton = document.querySelector('.addButton');

var inputValue = document.querySelector('.input');

const container = document.querySelector('.container');

if(window.localStorage.getItem("todos") == undefined){

	var todos = [];

	window.localStorage.setItem("todos", JSON.stringify(todos));

}

var todosEX = window.localStorage.getItem("todos");

var todos = JSON.parse(todosEX);

class item{

	constructor(itemName){

		this.createDiv(itemName);

	}

	createDiv(itemName){

		var itemBox = document.createElement('div');

		itemBox.classList.add('item');

		var input = document.createElement('input');

		input.type = "text";

		input.value = itemName;

		input.disabled = true;

		input.classList.add('item_input');

		var removeButton = document.createElement('button');

		removeButton.classList.add('removeButton');

		removeButton.innerHTML = "REMOVE";

		removeButton.addEventListener('click', () => this.remove(itemBox, itemName));

		container.appendChild(itemBox);

		itemBox.appendChild(input);

		itemBox.appendChild(removeButton);

	}

	remove(itemBox, itemName){

		itemBox.parentNode.removeChild(itemBox);

		let index = todos.indexOf(itemName);

		todos.splice(index, 1);

		window.localStorage.setItem("todos",JSON.stringify(todos));

	}

}

function check(){

	if(inputValue.value != ""){

		new item(inputValue.value)

		todos.push(inputValue.value);
		
		window.localStorage.setItem("todos",JSON.stringify(todos));

		inputValue.value = "";

	}

}

for (var v = 0 ; v < todos.length ; v++){
 
	new item(todos[v]);

}

addButton.addEventListener('click',check);

window.addEventListener('keydown',(e) => {

	if( e.which == 13){

		check();

	}

})