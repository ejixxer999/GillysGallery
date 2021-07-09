class Photo {
    static all = []
    static photoContainer = document.getElementById('photos-container')
    static photoForm = document.getElementById('form-area')

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
                <img class="pimage" src=${this.image} height="300" width="200" />
                <h3>${this.date}</h3>
                <p>${this.photographer}</p>
            </div>
                <button id='delete-bttn'>Delete</button>
                `
        
        // const grapherImg = document.getElementsByClassName('pimage')
        // for (const img of grapherImg){
        //     img.addEventListener('click', this.photoShow)    
        // }
        // const bttns = document.querySelectorAll('button')
        // for(const button of bttns){
        //     button.addEventListener('click', handleButton)
        // }
        return this.element
        
    }
    slapOnDom(){
        Photo.photoContainer.append(this.photoHTML())
    }
    static renderForm(){
        Photo.photoForm.innerHTML += `
        <form id="new_photo">
            Date: <input type="text" id="date">
            Photographer: <input type="text" id="photographer">
            image: <input type="text" id="photo">
            Gallery: <input type="text" id="gallery_id">
            <input type="submit" id="Publish">
        </form>
        
        `
            // gallery: <input type="text" id="gallery">
    }

    handleClick = () => {
        if (event.target.innerText ==='Delete'){
            this.element.remove()
            photoService.deletePhoto(this.id)
        }else if (event.target.className === 'pimage'){
            this.photoShow()
        }
    }

    photoShow(){
        const id = event.target.parentElement.dataset.id
        
        
        fetch(`http://127.0.0.1:3000/photos/${id}`)
        .then(resp => resp.json())
        .then(photo => {
            
            photoContainer.innerHTML = ''
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

