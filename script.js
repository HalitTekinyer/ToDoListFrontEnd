document.getElementById("new-task-button").onclick = function(){
    document.getElementById("new-task-modal").style.visibility = "visible";
};
document.getElementById("new-task-model-button-cancel").onclick = function(){
    document.getElementById("new-task-modal").style.visibility = "hidden";
};
document.getElementById("new-task-model-button-add").onclick = function(){
    var taskText = document.getElementById("task-text-input").value
    if(taskText != ""){
        document.getElementById("task-text-input").value = "";
        var taskId = document.getElementById("content-div").childElementCount + 1
        var taskDiv = document.createElement("div");
        taskDiv.className = "radio-element";
        var taskCheckBox = document.createElement("input");
        taskCheckBox.type = "checkbox";
        taskCheckBox.id = taskId.toString();
        taskCheckBox.name = taskId.toString();
        taskCheckBox.value = taskId.toString();
        taskCheckBox.setAttribute("onchange","CheckboxChange(this)");
        var taskLabel = document.createElement("label");
        taskLabel.htmlFor = taskId.toString();
        taskLabel.textContent = taskText;
        var taskDeleteButton = document.createElement("i");
        taskDeleteButton.className = "fa-regular fa-trash-can delete-button";
        taskDeleteButton.style.visibility = "hidden";
        taskDeleteButton.setAttribute("onclick","DeleteTask(this)");
        taskDiv.appendChild(taskCheckBox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(taskDeleteButton);
        document.getElementById("content-div").appendChild(taskDiv);
        document.getElementById("new-task-modal").style.visibility = "hidden";
    }
    else{
        alert("Task text can not be empty!");
    }
};
function DeleteTask(clickedElement){
    clickedElement.parentElement.remove();
    console.log(document.getElementById("content-div").childElementCount)
}
function CheckboxChange(clickedElement){
    var checked = clickedElement.checked;
    var labelNode = clickedElement.parentElement.children[1];
    if(checked == true){
        labelNode.style.textDecoration = "line-through";
        labelNode.style.textDecorationColor = "#d1d1d1";
        labelNode.style.textDecorationThickness = "0.1em";
        clickedElement.parentElement.lastElementChild.style.visibility = "visible";
    }
    else{
        labelNode.style.textDecoration = "none";
        clickedElement.parentElement.lastElementChild.style.visibility = "hidden";
    }
}