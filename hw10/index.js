const list = document.querySelector('list');

list.addEventListener('click');


function newElement() {
    const li = document.createElement('li');
    const inputValue = document.getElementById('mainInput').value;
    const t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue == "") {
        alert("Type something to add!");
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.getElementById('mainInput').value = "";

    const button = document.createElement('BUTTON');
    button.className = "btn-close";
    li.appendChild(button);

    button.addEventListener("click", () => {
        li.remove();
        document.getElementById("placeholder").innerHTML = "List is empty...";
    });

    li.addEventListener("click", () => {
        li.style.backgroundColor = '#89cc89';
    });
    document.getElementById("placeholder").innerHTML = "";

}