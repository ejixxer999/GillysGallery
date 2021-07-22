class Gallery {
    static all = []
    static galleryForm = document.getElementById('form-area2')
    static galleryContainer = document.getElementById('gallery-container')

    constructor({name, id, photos}){
        this.name = name
        this.id = id
        this.photos = photos.map( p => new Photo(p))
        this.element = document.createElement('li')
        this.element.dataset.id = `${this.id}`
        this.element.id = `gallery-${this.id}`
        this.element.addEventListener('click', this.renderAllPhotos)
        Gallery.all.push(this)
    }
    
    renderAllPhotos=() => {
        console.log('Clicked:', this.photos)
        photoContainer.innerHTML = ''
        this.photos.forEach( p => p.slapOnDom())
    }   
        // when clicked = clear photosContainer, then replace it with the photos of the gallery


    appendToDOM(){
        Gallery.galleryContainer.append(this.galleryHTML())
    }

    static renderGalleryForm(){
        Gallery.galleryForm.innerHTML += `
        <form id="new_gallery">
        Gallery: <input type="text" id="gallery"><br>
        <input type="submit" id="Publish">
        </form>
        `
    }

    galleryHTML=() => {
     this.element.innerHTML = `
        <div data-id=${this.id}>
            <p>${this.name}</p>
        </div>
        `
        return this.element
    }

}