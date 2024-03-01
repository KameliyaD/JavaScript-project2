const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Add the add task function
function addTask(){
    //Check if the input placeholder is empty
    if(inputBox.value === '') {
        alert("Write your task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //Add the cross icon(delete)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //Display the span
        li.appendChild(span);
    }
    //Clear the input field after creating a task
    inputBox.value = "";
    //After adding a new task, save it to storage and update the content in the browser
    saveData();
}

listContainer.addEventListener("click", function(e) {
    //Checks whether a task has been clicked
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        //Checks whether the span has been clicked
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Store the tasks in the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Display the data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();