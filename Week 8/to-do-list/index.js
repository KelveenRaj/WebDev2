let taskList = [];
const addButton = document.getElementById("btn")

addButton.addEventListener("click", addTask)

function addTask() {
	let input = document.getElementById("input").value;
	taskList.push(input);
	document.getElementById("input").value = "";
	displayTasks();
}

function displayTasks() {
	let list = document.getElementById("task-list");
    // This is to reset the list, u can try without this and see the difference
	list.innerHTML = "";
	for (let i = 0; i < taskList.length; i++) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(taskList[i]));
		list.appendChild(li);
	}
}
