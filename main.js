//let ul = document.getElementById("task-list");
//console.log(ul);
//localStorage.setItem('myCat', 'Tom');
//localStorage.clear();


let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

console.log(taskList)

//DISPLAY TASKS
function addTask(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}


for (let i = 0; i < taskList.length; i++) {
    let text1 = taskList[i].taskText;
    let ul = document.getElementById("task-list");
    let span1 = '<span class="task">' + text1 +'</span>';



    ul.insertAdjacentHTML('beforeend',
        '        <li>' +
        '            <input type="checkbox">' +
        span1 +
        '            <button class="delete-btn">x</button>' +
        '        </li>');

    let btn = document.getElementsByClassName('delete-btn');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.remove();
            taskList.pop();
            localStorage.setItem("tasks", JSON.stringify(taskList));
            console.log(taskList);

        }, false);

    }

}



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
    let conte = `${boxValue}`;
    //console.log(boxValue);


    button.classList.add('delete-btn');
    button.innerHTML = "x";
    button.onclick = function () {
        //alert("Button is clicked");
        //DELETE TASK
        for (let i = 0; i < taskList.length; i++) {

            if(taskList[i].taskText === conte){

                taskList.splice(i, 1);
                localStorage.setItem("tasks", JSON.stringify(taskList));
                console.log(taskList);


            }
        }


        //END OF DELETE TASK
        button.parentElement.remove();
    };

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);

    document.getElementById("input-task").value = '';

    //ADD TASK
    let task = {
        completed: false,
        taskText: `${boxValue}`
    };
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    //END OF ADD TASK



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


