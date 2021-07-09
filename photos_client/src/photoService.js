class PhotoService{

    constructor(endpoint){
        this.endpoint = endpoint
    }
    getPhotos(){
        
        fetch(`${this.endpoint}/photos`)
        .then(resp => resp.json())
        .then(photos => {
            for (const photo of photos){
                const p = new Photo(photo)
                p.slapOnDom()
                
                
            }
            
        })
    }
    //  sending a new image to the backend //
    // formData(){
    //    const photo = {
    //     // id: document.getElementById(`${Photo.element.id}`),
    //     date: document.getElementById('date').value,
    //     photographer: document.getElementById('photographer').value,
    //     image: document.getElementById('photo').value,
    //     gallery_id: document.getElementById('gallery_id').value
    //    }
        
    // }
    
    createPhoto(event){
        const photo = {
            // id: document.getElementById(`${Photo.element.id}`),
            date: document.getElementById('date').value,
            photographer: document.getElementById('photographer').value,
            image: document.getElementById('photo').value,
            gallery_id: document.getElementById('gallery_id').value
           }
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(photo)
        }
        

        fetch(`http://127.0.0.1:3000/photos`, options)
        .then(resp => resp.json())
        .then(photo => {
            const p = new Photo(photo)
            p.slapOnDom()
            
        })

           
        
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

    resetForm(){
        document.getElementById('date').value = ''
        document.getElementById('photographer').value = ''
        document.getElementById('photo').value = ''
        document.getElementById('gallery_id').value = ''
    }

    deletePhoto(id){
        fetch(`http://127.0.0.1:3000/photos/${id}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json'
            }
        })
        .then(resp => resp.json)
        .then(data => {})
     
    }


}