function loadImage(src){
    const img = document.createElement('img')
    img.setAttribute('src',src)

    const h2 = document.createElement('h2')
    h2.id = 'loading-h2'
    h2.append.apply('Loading image ....')
    document.body.append(h2)

    return new Promise((resolve,reject)=>{
        img.addEventListener('load',()=>{
            resolve(img)
        });

        img.addEventListener('error',()=>{
            reject('Image can not be loaded')
        })
    })


}

loadImage('./завантаження.jpeg')
.then((img)=>{
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