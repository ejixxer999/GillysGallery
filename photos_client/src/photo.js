class Photo {
    static all = []
    static photoContainer = document.getElementById('photos-container')
    static photoForm = document.getElementById('form-area')
    static galleryContainer = document.getElementById('gallery-container')
    static gc = document.getElementById('gc')

    constructor({id, date, image, photographer, gallery_id }){
        this.id = id
        this.date = date
        this.image = image
        this.photographer = photographer
        this.gallery_id = gallery_id
        this.element = document.createElement('li')
        this.element.dataset.id = `${this.id}`
        this.element.id = `${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Photo.all.push(this)
    }

    photoHTML(){
        this.element.innerHTML += `
            <div data-id=${this.id}>
                <a href="https://instagram.com" target="_blank" class="gallery__link">
                <figure class="gallery__thumb">
                <img class="gallery__image" src=${this.image} alt=${this.photographer}/>
                <figcaption class="gallery__caption">${this.photographer}, ${this.date}</figcaption>
                </figure>
            </div>
                <button id='delete-bttn' class="bttn">Delete</button>
                `
        return this.element
    }

    slapOnDom(){
        Photo.photoContainer.append(this.photoHTML())
    }

    static renderForm(){
        Photo.photoForm.innerHTML += `
        <form class="form-class" id="new_photo">
            Date: <input type="text" id="date"><br>
            Photographer: <input type="text" id="photographer"><br>
            image: <input type="text" id="photo"><br>
            Gallery: <input type="text" id="gallery_id"><br>
            <input class="bttn" type="submit" id="Publish">
        </form>
        `    
    }

    handleClick = (event) => {
        if (event.target.innerText ==='Delete'){
            this.element.remove()
            photoService.deletePhoto(this.id)
        }else if (event.target.className === 'gallery__image'){
            this.photoShow()
        }
    }

    photoShow(){
        const id = event.target.parentElement.dataset.id
        
        fetch(`http://127.0.0.1:3000/photos/${id}`)
        .then(resp => resp.json())
        .then(photo => {
            
            photoContainer.innerHTML = ''
            gc.innerHTML = ''
            galleryContainer.innerHTML = ''
            photoContainer.innerHTML += `
            <img src=${photo.image} />
            <br>
            <a id="backbttn" href="#">Back</a>
            `
            
            const backbttn = document.getElementById('backbttn')
            backbttn.addEventListener('click', back)
    
        })
    }

}

