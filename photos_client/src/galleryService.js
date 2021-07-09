class GalleryService{

    constructor(endpoint){
        this.endpoint = endpoint
        
    }

    getGalleries(){

        fetch(`${this.endpoint}/galleries`)
        .then(resp => resp.json())
        .then(galleries => {
            for (const gallery of galleries){
                const g = new Gallery(gallery)
                  g.appendToDOM
            }
           
        })
        
    }

    createGallery(event){
        event.preventDefault()
     const gallery = {
         name: document.getElementById('gallery').value,   
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