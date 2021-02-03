const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`ERROR! ${xhr.status}: ${xhr.statusText}`);
    } else {
        const myList = xhr.response;

        const newItem = document.createElement('li');
        newItem.textContent = myList;

        const arr = []
        myList.map(item => {
            if (item.completed) {
                item.completed = 'Done';
                newItem.innerHTML = item.title + ": " + item.completed;

            } else {
                item.completed = 'To do';
                newItem.innerHTML = item.title + ": " + item.completed;
            }
            arr.push(newItem.innerHTML);
        });

        const toDoList = function() {
            let ul = document.createElement('ul');
            document.getElementById('container').appendChild(ul);
            arr.forEach(rendertoDoList);


            function rendertoDoList(element) {
                const li = document.createElement('li');
                if (element.includes('To do')) {
                    li.className = 'todo';
                } else {
                    li.className = 'done';
                }
                ul.appendChild(li)
                li.innerHTML = element
            }
        }
        toDoList()
    }
}