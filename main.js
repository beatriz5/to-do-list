//let ul = document.getElementById("task-list");
//console.log(ul);
//localStorage.setItem('myCat', 'Tom');
//localStorage.clear();


let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let ul = document.getElementById("task-list");
console.log(taskList)

//DELETE TASK
function deleteTask(i) {
    let btn = document.getElementsByClassName('delete-btn');
    console.log("AQUI");
    btn[i].addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();

        taskList.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        console.log(taskList);

    }, false);

}


//ADD TASK FUNC
function addTask(taskT){
    let span1 = '<span class="task">' + taskT + '</span>';

    ul.insertAdjacentHTML('beforeend',
        '        <li>' +
        '            <input type="checkbox">' +
        span1 +
        '            <button class="delete-btn">x</button>' +
        '        </li>');
}


for (let i = 0; i < taskList.length; i++) {
    let innerText = taskList[i].taskText;
    addTask(innerText);
    deleteTask(i);


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

            if (taskList[i].taskText === conte) {

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


    input.addEventListener('change', () => {
        span.classList.toggle("task-done");
        /*if (e.target.checked) {
            span.classList.add("task-done");
        } else {
            span.classList.remove("task-done");
        }*/
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


document.addEventListener("keydown", function (event) {
    let key = event.key; //example a or A or s
    let code = event.code; //example KeyA which is a or A
    let codes = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];
    let whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

    if (codes.includes(code)) {
        /* play audio when keydown */
        console.log(`The '${key}' key is pressed`);
        let audioFile = `audio/${key.toUpperCase()}.mp3`
        let audio = new Audio(audioFile);
        audio.play();

        /* color change */
        let currentColor = whiteKeys.includes(key.toUpperCase()) ? "white" : "black";
        document.getElementById(key.toUpperCase()).style.background = "#85C1E9";
        setTimeout(function () {
            document.getElementById(key.toUpperCase()).style.background = currentColor;
        }, 300);

    } else {
        console.log(`The piano does not have the '${key.toUpperCase()}' key`);
    }
});