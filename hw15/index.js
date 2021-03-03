// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then((response) => {
//         return response.json();
//     })
//     .then((albomInfo) => {
//         const leftDiv = document.getElementById('left-column');
//         const listContainer = document.createElement('ul');
//         const titleList = [];

//         albomInfo.map((item, indx) => {
//             const newItem = document.createElement('li');
//             newItem.classList.add('item');

//             if (item.title) {
//                 newItem.setAttribute("id", item.id)
//                 newItem.innerHTML = item.title;
//                 titleList.push(newItem.innerHTML);
//                 listContainer.appendChild(newItem);
//             }

//             newItem.addEventListener("click", showAlbomPhoto);

//             if (indx === 0) {
//                 newItem.click();
//             }

//             function showAlbomPhoto() {
//                 const albumId = item.id;
//                 fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
//                     .then((response) => {
//                         return response.json();
//                     })
//                     .then((albomPhotos) => {

//                         const rightDiv = document.getElementById('right-column');
//                         rightDiv.innerHTML = "";
//                         const photoContainer = document.createElement('ul');
//                         const photoList = [];

//                         albomPhotos.map((item) => {
//                             const newPhotoItem = document.createElement('li');
//                             const image = document.createElement('img');

//                             if (item.url) {
//                                 image.src = item.url;
//                                 image.style = "height: 200px";
//                                 newPhotoItem.append(image);
//                                 photoList.push(newPhotoItem.innerHTML);
//                                 photoContainer.appendChild(newPhotoItem);
//                                 rightDiv.appendChild(photoContainer);
//                             }
//                         })
//                     })
//             }
//         })
//         leftDiv.appendChild(listContainer);
//     })

// .catch((err) => {
//     console.error(err);
// })


const $leftDiv = $('#left-column');
const $rightDiv = $('#right-column');
const $titleList = [];

class AlbumRequests {
    static sendGetAlbumRequest() {
        return fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
    }

    static sendGetPhotoRequest() {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=2`)
            .then((response) => response.json())
    }
}


function getAlbums() {
    const $albumInfo = AlbumRequests.sendGetAlbumRequest();
    $albumInfo.then((album) => {

        album.map((item, index) => {
            const $newItem = document.createElement('li');
            $newItem.setAttribute("id", item.id);
            $newItem.innerHTML = item.title;
            $titleList.push($newItem.innerHTML);
            $leftDiv.append($newItem);
            this.createAlbumEventListener(item.id)
            if (index === 0) {
                $newItem.click();
                this.createAlbumEventListener(item.id)
            }

        })
    })
}

function getPhotos() {
    const $photoInfo = AlbumRequests.sendGetPhotoRequest();

    $photoInfo.then((item) => {

        item.map((item) => {
            const $newPhotoItem = document.createElement('li');
            const $image = document.createElement('img');

            $image.src = item.url;
            $image.style = "height: 200px";
            $newPhotoItem.append($image);
            $rightDiv.append($newPhotoItem)
        })
    })
}

function createAlbumEventListener(id) {
    $leftDiv.click(() => {
        this.getPhotos()
    })
}

getAlbums()
    // getPhotos()
    // createAlbumEventListener()