class PhotoService{

    constructor(endpoint){
        this.endpoint = endpoint
    }
//-----------Send Photos To Back-End-------------//
    createPhoto(event){
        const photo = {
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
//------------Clear Forms After Submit-----------------------//
    resetForm(){
        document.getElementById('date').value = ''
        document.getElementById('photographer').value = ''
        document.getElementById('photo').value = ''
        document.getElementById('gallery_id').value = ''
    }
//-------------Remove Photo-----------------------------//
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


 