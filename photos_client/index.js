const endPoint = "https://localhost:3000/photos"

class Photos {
    constructor(photo, photoAttributes){
        this.id = photo.id;
        this.date = photoAttributes.date;
        this.image_url = photoAttributes.image_url;
        this.photographer = photoAttributes.photographer;

        Photos.call.push(this);
    }

    renderPhoto(){
        return `
        <div data-id=${this.id}>
        <img src=${this.image_url} height="300" width="200">
        <p>${this.photographer}</p>
        <p>${this.date}</p>
        </div>
        <br><br>`;

    }
}

Photos.all = [];

function getPhotos(){
    fetch(endPoint)
    .then(response => response.json())
    .then(photos => {photos.data.forEach(photo => {let newPhoto = newPhoto(photo,photo.photoAttributes)
    document.querySelector('#photos-container').innerHTML += newPhoto.renderPhoto()
    })
})
}