let deleteTask = function(e) {
    e.currentTarget.parentNode.remove();
}


// add task
let addTaskBtn = document.getElementById("add-task-button");
let container = document.getElementById('task-list');

addTaskBtn.addEventListener("click", function() {
    let el = document.getElementById("input-task");
    if (!el.value) return;
    let newTask = `<li>
            <input type="checkbox" />
            <span class="task">${el.value}</span>
            <button type="button" class="delete-btn">delete</button>
        </li>`
    document.getElementById("input-task").value = '';
    container.insertAdjacentHTML('beforeend', newTask);
    container.lastElementChild.lastElementChild.addEventListener('click', deleteTask, false);
});


// delete task
let deleteTaskBtns = document.getElementsByClassName('delete-btn');

for (let i = 0; i < deleteTaskBtns.length; i++) {
    deleteTaskBtns[i].addEventListener('click', deleteTask, false);
}


/*
document.getElementById("add-task-button").addEventListener('click', function (e) {

    let boxValue = document.getElementById('input-task').value;
    let ul = document.getElementById("task-list");
    let li = document.createElement("li");

    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

    input.setAttribute('type', 'checkbox');




    span.classList.add('task');
    let i = document.createTextNode(boxValue);
    span.appendChild(i);

    button.classList.add('delete-btn');
    let t = document.createTextNode("x");
    button.appendChild(t);

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    ul.appendChild(li);


    document.getElementById("input-task").value ='';



}); */


