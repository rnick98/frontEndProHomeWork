fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
        return response.json();
    })
    .then((albomInfo) => {
        const leftDiv = document.getElementById('left-column');
        const listContainer = document.createElement('ul');
        const newItem = document.createElement('li');
        const titleList = [];
        albomInfo.map(item => {
            if (item.title) {
                newItem.innerHTML = item.title;
            }
            titleList.push(newItem.innerHTML)

        })
        console.log(titleList)

        listContainer.appendChild(newItem);
        leftDiv.appendChild(listContainer);

        newItem.textContent = titleList;


    })


.catch(() => {
    console.log('ERROR');
})