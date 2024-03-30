function loadImage(src){

    const img = document.createElement('img')
    img.setAttribute('src',src)

    const h2 = document.createElement('h2')
    h2.id = 'loading-h2'
    h2.append('Loading image....')
    document.body.append(h2)  
    
    return new Promise((resolve,reject)=>{

        const timeOutId = setTimeout(()=>{
            reject('Image can not be loaded')
        },5000)
    
    
        img.addEventListener('load',()=>{
            clearTimeout(timeOutId)
            resolve(img)
        });
    
        img.addEventListener('error',()=>{
            clearTimeout(timeOutId)
            reject('Image can not be loaded')
        })
    })
}



loadImage('./завантаження.jpeg').then((img)=>{
    document.body.append(img);
},(errorMessage)=>{
    const h2 = document.createElement('h2');
    h2.append(errorMessage)
    document.body.append(h2)
    
})
.finally(()=>{
    const loadingH2= document.querySelector('#loading-h2');
    loadingH2.remove();
})