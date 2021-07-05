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
    createPhoto(){
           event.preventDefault()
        const photo = {
            date: document.getElementById('date').value,
            photographer: document.getElementById('photographer').value,
            image: document.getElementById('photo').value,
            gallery_id: document.getElementById('gallery').value
            
        }
          
             
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    
            },
            body: JSON.stringify(photo)
        }

        fetch(`${this.endpoint}/photos`, configObj)
        .then(resp => resp.json())
        .then(photo => {
            const p = new Photo(photo)
            p.slapOnDom()
            
        })
           
        
    }

    resetForm(){
        document.getElementById('date').value = ''
        document.getElementById('photographer').value = ''
        document.getElementById('photo').value = ''
        document.getElementById('gallery').value = ''
    }


}