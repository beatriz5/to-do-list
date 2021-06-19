//let ul = document.getElementById("task-list");
//console.log(ul);
//localStorage.setItem('myCat', 'Tom');
//localStorage.clear();
let task1 = {
    marcado: false,
    texto: 'Buy milk',
};

let task2 = {
    marcado: true,
    texto: 'Get a cow',
};

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

let array = localStorage.getItem('taskList');
let cow = JSON.parse(array);
console.log("Hola");
console.log(cow);




//ADD NEW TASK
document.getElementById("add-task-button").addEventListener('click', function () {
    let boxValue = document.getElementById('input-task').value;
    let ul = document.getElementById("task-list");
    let li = document.createElement("li");

    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

    input.setAttribute('type', 'checkbox');

    span.classList.add('task');
    span.innerHTML = `${boxValue}`;
    //console.log(boxValue);

    button.classList.add('delete-btn');
    button.innerHTML = "x";
    button.onclick = function () {
        //alert("Button is clicked");
        button.parentElement.remove();
    };

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);

    document.getElementById("input-task").value = '';

    //Add task
    let task3 = {
        marcado: false,
        texto: `${boxValue}`
    };
    taskList.push(task1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    let array = localStorage.getItem('taskList');
    let cow = JSON.parse(array);
    console.log("mutable");
    console.log(cow);

    input.addEventListener('change', e => {
        if (e.target.checked) {
            span.classList.add("task-done");
        } else {
            span.classList.remove("task-done");
        }
    });
});

//DELETE TASK
let btn = document.getElementsByClassName('delete-btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();
        const cat = localStorage.getItem('my');
        console.log(cat);

    }, false);
}

//LINE-THROUGH OR NOT
let checkbox = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function (e) {
        let k = checkbox[i].nextElementSibling;
        if (e.target.checked) {
            k.classList.add("task-done");
        } else {
            if (k.classList.contains('task-done')) {
                k.classList.remove("task-done");
            }
        }
    }, false);
}


