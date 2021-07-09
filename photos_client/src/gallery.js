class Gallery {
    static all = []
    static galleryForm = document.getElementById('form-area2')
    static galleryContainer = document.getElementById('gallery-container')

    constructor({name, id}){
        this.name = name
        this.id = id
        this.element = document.createElement('li')
        this.element.dataset.id = `${this.id}`
        this.element.id = `gallery-${this.id}`
        Gallery.all.push(this)
        
    }

    appendToDOM(){
        Gallery.galleryContainer.append(this.galleryHTML())
    }   

    static renderGalleryForm(){
        Gallery.galleryForm.innerHTML += `
        <form id="new_gallery">
        Gallery: <input type="text" id="gallery">
        <input type="submit" id="Publish">
        </form>
        `
    }

    galleryHTML(){
        this.elememt.innerHTML += `
        <div data-id=${this.id}>
            <title>${this.name}</title>
        </div>
        `
        return this.element
    }

     // photoHTML(){
    //     this.element.innerHTML += `
    //         <div data-id=${this.id}>
    //             <img class="pimage" src=${this.image} height="300" width="200" />
    //             <h3>${this.date}</h3>
    //             <p>${this.photographer}</p>
    //         </div>
    //             <button id='delete-bttn'>Delete</button>
    //             `
        
    //     const grapherImg = document.getElementsByClassName('pimage')
    //     for (const img of grapherImg){
    //         img.addEventListener('click', this.photoShow)    
    //     }
    //     // const bttns = document.querySelectorAll('button')
    //     // for(const button of bttns){
    //     //     button.addEventListener('click', handleButton)
    //     // }
    //     return this.element
        
    // }
 
    
   
    

   

    


}