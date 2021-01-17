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
    const span = document.createElement('SPAN');
    span.className = "close";
    li.appendChild(span);
}
