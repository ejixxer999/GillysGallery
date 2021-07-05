class Gallery{

    static all =[]
    static photoForm = document.getElementById('form-area')

    constructor({name}){
        this.name = name
        Gallery.all.push(this)
    }

    static renderCollection(){
        Gallery.photoForm.innerHTML += `
        Gallery: <input type="select" id="gallery">
        `

    }

    


}