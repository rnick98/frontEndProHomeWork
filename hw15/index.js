fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
        return response.json();
    })
    .then((albomInfo) => {
        const leftDiv = document.getElementById('left-column');
        const listContainer = document.createElement('ul');
        const titleList = [];

        albomInfo.map(item => {
            const newItem = document.createElement('li');
            if (item.title) {
                newItem.setAttribute("id", item.id)
                newItem.innerHTML = item.title;
                titleList.push(newItem.innerHTML);
                listContainer.appendChild(newItem);
            }

            newItem.addEventListener("click", showAlbomPhoto);

            function showAlbomPhoto() {
                const albumId = item.id;
                fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((albomPhotos) => {
                        const rightDiv = document.getElementById('right-column');
                        const photoContainer = document.createElement('ul');
                        const photoList = [];

                        albomPhotos.map(item => {
                            const newPhotoItem = document.createElement('li');
                            const image = document.createElement('img');

                            if (item.url) {
                                image.src = item.url;
                                image.style = "height: 200px";
                                newPhotoItem.append(image);
                                photoList.push(newPhotoItem.innerHTML);
                                photoContainer.appendChild(newPhotoItem);
                                rightDiv.appendChild(photoContainer);
                            }
                        })
                    })
            }
        })
        leftDiv.appendChild(listContainer);
    })

.catch(() => {
    console.log('ERROR!');
})