//your code here

let input = document.getElementById('newTodoInput');
let btn = document.getElementById('addTodoBtn');
let todoList = document.getElementById('todoList')

btn.addEventListener('click',() => {
	let li = document.createElement('li')
	li.innerHTML = input.value
	todoList.append(li)
	input.value = ""
})