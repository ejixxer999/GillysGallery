class galleryService{

    constructor(endpoint){
        this.endpont = endpoint
    }

    getGalleries(){

        fetch(`${this.endpoint}/galleries`)
        .then(resp => resp.json())
        .then(gallery => {
            for (const g of gallery){
                const g = new Gallery(gallery)
                p.slapOnDom()
            }
           
        })
        
    }

    createGallery(){
        event.preventDefault()
     const gallery = {
         name: document.getElementById('name').value,   
        }
       
          
     const configObj = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
                 
         },
         body: JSON.stringify(photo)
     }

     fetch(`${this.endpoint}/galleries`, configObj)
     .then(resp => resp.json())
     .then(gallery => {
         const g = new Gallery(gallery)
         g.slapOnDom()
         
     })
        
     
 }

}