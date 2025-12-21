document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const todoList = document.getElementById("todoList");
  const deleteDoneTasks = document.getElementById("deleteDoneTasks");
  const deleteAllTasks = document.getElementById("deleteAllTasks");
  const allTasksButton = document.getElementById("allTasks");
  const doneTasksButton = document.getElementById("doneTasks");
  const todoTasksButton = document.getElementById("todoTasks");
  const confirmationModal = document.getElementById("confirmationPopup");
  const confirmDeleteButton = document.getElementById("confirmDeleteButton");
  const cancelDeleteButton = document.getElementById("cancelDeleteButton");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let currentFilter = "all";
  const renderTasks = (filter = "all") => {
    todoList.innerHTML = "";
tasks
      .filter((task) => {
        if (filter === "done") return task.done;
        if (filter === "todo") return !task.done;
        return true;
      })