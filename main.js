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
    console.log(boxValue);

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
});

//DELETE TASK
let btn = document.getElementsByClassName('delete-btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();
    }, false);
}

/*let ul = document.getElementById("task-list");
    ul.insertAdjacentHTML('beforeend',
        '        <li>' +
        '            <input type="checkbox">' +
        '            <span class="task">Set do A/B</span>' +
        '            <button class="delete-btn">x</button>' +
        '        </li>');*/