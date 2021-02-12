fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((todos) => {
        console.log(todos)
        const listContainer = document.createElement('ul');
        const titleList = [];

        todos.map((item, indx) => {
            const newItem = document.createElement('li');
            if (item.title + item.completed) {
                if (item.completed) {
                    item.completed = 'Done';
                    newItem.style.backgroundColor = '#5cc55c';
                } else {
                    item.completed = 'To do'
                    newItem.style.backgroundColor = '#ffff9e';
                }
                newItem.innerHTML = item.title + ' - ' + item.completed;
                titleList.push(newItem.innerHTML);
            }
            listContainer.appendChild(newItem);

        })

        document.getElementById("todolist").appendChild(listContainer);



        const addButton = document.querySelector('button');

        addButton.addEventListener('click', addToList)

        function addToList() {
            const liItem = document.createElement('li');
            const inputValue = document.getElementById('floatingInput').value;
            const textNode = document.createTextNode(inputValue);

            liItem.appendChild(textNode);

            fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: 1,
                        id: 1,
                        title: `${inputValue}`,
                        completed: false,

                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((myTodos) => {
                    console.log(myTodos)
                    liItem.addEventListener('click', changeStatus)

                    function changeStatus() {
                        if (myTodos.completed === false) {
                            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                                    method: 'PUT',
                                    body: JSON.stringify({
                                        completed: `true`,
                                    }),
                                    headers: {
                                        'Content-type': 'application/json; charset=UTF-8',
                                    },
                                })
                                .then((response) => response.json())
                                .then((myTodos) => {
                                    console.log(myTodos)
                                    liItem.style.backgroundColor = '#5cc55c';

                                });
                        }
                    }
                });

            if (inputValue === '') {
                alert("You must write something!");
            } else {
                document.querySelector("#todolist > ul").prepend(liItem);
                liItem.style.backgroundColor = "#ffff8e";
            }

            document.getElementById("floatingInput").value = "";



        }
    });