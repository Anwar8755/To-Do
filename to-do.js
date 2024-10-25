function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.classList.add("task");
        li.textContent = taskInput.value;
        li.onclick = () => li.remove();
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input
    } else {
        alert("Please enter a task.");
    }
}
