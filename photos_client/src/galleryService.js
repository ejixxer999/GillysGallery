class GalleryService{

    constructor(endpoint){
        this.endpoint = endpoint
        
    }
//---------------- Create Gallery-------------------------//
    createGallery(event){
     event.preventDefault()
     const gallery = {
         name: document.getElementById('gallery').value   
        }
       
     const configObj = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'    
         },
         body: JSON.stringify(gallery)
        }

     fetch(`${this.endpoint}/galleries`, configObj)
     .then(resp => resp.json())
     .then(gallery => {
         const g = new Gallery(gallery)
         g.appendToDOM()
        })
    }

   
 

}