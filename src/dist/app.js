"use strict";
//todo add tasks
//todo remove tasks
//todo clear tasks
//todo add drag & drop functionality to tasks div
//containers and inputs
const toDosContainer = document.querySelector(".todosContainer");
const taskInput = document.querySelector(".mainInput");
//delete icon
const trashIcon = document.querySelector(".fa-trash");
//"+" events
const addIcon = document.querySelector(".fa-plus");
addIcon === null || addIcon === void 0 ? void 0 : addIcon.addEventListener("click" || "keyup", t => {
    t.preventDefault();
    if ((taskInput === null || taskInput === void 0 ? void 0 : taskInput.value) == null || taskInput.value == "")
        return;
    const newTask = {
        title: taskInput.value,
        completed: false
    };
    addTaskItem(newTask);
});
//adding task div
function addTaskItem(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    const divText = document.createTextNode(task.title);
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-regular", "fa-circle-xmark");
    taskDiv.appendChild(divText);
    toDosContainer === null || toDosContainer === void 0 ? void 0 : toDosContainer.appendChild(taskDiv);
    taskDiv.appendChild(xIcon);
    xIcon.addEventListener("click", () => {
        taskDiv.classList.remove("task");
        xIcon.classList.remove("fa-regular", "fa-circle-xmark");
        taskDiv.removeChild(divText);
        ;
    });
}
;
//global task list
let globalTaskSelector = document.getElementsByClassName("task");
let allTasks = [globalTaskSelector];
//global delete
trashIcon === null || trashIcon === void 0 ? void 0 : trashIcon.addEventListener("click", function () {
    while (toDosContainer === null || toDosContainer === void 0 ? void 0 : toDosContainer.firstChild) {
        toDosContainer.removeChild(toDosContainer.firstChild);
    }
    ;
});
