//todo add tasks
//todo remove tasks
//todo clear tasks
//todo add drag & drop functionality to tasks div


//type Task
type Task = {
    title: string, 
    completed: boolean
}

//containers and inputs
const toDosContainer = document.querySelector<HTMLDivElement>(".todosContainer") 
const taskInput = document.querySelector<HTMLInputElement>(".mainInput")


//delete icon
const trashIcon = document.querySelector(".fa-trash")


//"+" events
const addIcon = document.querySelector(".fa-plus");
addIcon?.addEventListener("click" || "keyup",  t => {
    t.preventDefault();


    if (taskInput?.value == null || taskInput.value == "") return

    const newTask: Task = {
        title: taskInput.value,
        completed: false
    }
    addTaskItem(newTask)
})


//adding task div
function addTaskItem(task: Task){
    const taskDiv: HTMLDivElement = document.createElement("div")
    taskDiv.classList.add("task");
    const divText = document.createTextNode(task.title)
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-regular", "fa-circle-xmark")
    taskDiv.appendChild(divText);
    toDosContainer?.appendChild(taskDiv)
    taskDiv.appendChild(xIcon)

    xIcon.addEventListener("click", () => {
        taskDiv.classList.remove("task");
        xIcon.classList.remove("fa-regular", "fa-circle-xmark")
        taskDiv.removeChild(divText);
        ;
    });
};


//global task list
let globalTaskSelector = document.getElementsByClassName("task");
let allTasks = [globalTaskSelector]


//global delete
trashIcon?.addEventListener("click", function(){
    while (toDosContainer?.firstChild) {
        toDosContainer.removeChild(toDosContainer.firstChild)};
})