// Fetch get the random todos from the json placeholder api:


// Making a get request
fetch('https://jsonplaceholder.typicode.com/todos/100')

.then(response=>response.json())

.then(data=>console.log(data))