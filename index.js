/*<div class="image-wrapper">
      <img class="card-image" src="https://pm1.aminoapps.com/6750/dddd7fbf857879e7a4513d20a85c1c89d5d74a41v2_hq.jpg" alt="John avatar">
      </div>
      <h2 class="user-name">John</h2>
      <p class="deccription">Deskription for John</p>
    */

const johnObject = {
        id: 1,
        name: 'John',
        description: 'Description for John',
        profilePicture: 'https://illustrators.ru/uploads/illustration/image/1705348/IMG_20221224_003828_372.jpg'
    }

const root = document.querySelector('#root')

function createUserCard(user){

    const imgWrapper = creteImageWrapper(user)
    
    const h2 = createElement('h2',{classNames:['username']},user.name)

    const p = createElement('p',{classNames:['description']},user.description)

  

    
    return createElement('article',{classNames:['card-wrapper']},imgWrapper,h2,p);
}

const cardArray = data.map(user => createUserCard(user));

root.append(...cardArray);

/**
 * @param {String} type - тег елемента, який нам треба створити
 * @param {String[]} classNames - список класів, які треба додати до елемента
 * @param {...Node} childNodes - список дочірніх вузлів
 * @returns {HTMLElement}
 */



function createElement(type,{classNames},...childNodes){
    const elem = document.createElement(type)
    elem.classList.add(...classNames)
    elem.append(...childNodes)

    return elem

}

function imageLoadHandler({target}){
    console.log('Image succesfully load')
    const parentWrapper = document.querySelector(`#wrapper${target.dataset.id}`)
    parentWrapper.append(target)
}

function imageErrorHandler({target}){
    target.remove()
    console.log('Image loading has error')
}


function createUserImage(user){
    const img = document.createElement('img')
    img.setAttribute('src',user.profilePicture)
    img.setAttribute('alt',user.name)
    img.dataset.id = user.id
    img.classList.add('card-image')
    img.addEventListener('load',imageLoadHandler)
    img.addEventListener('error',imageErrorHandler)
   

    return img
}

function creteImageWrapper(user){
    const imgWrapper = createElement('div',{classNames:['image-wrapper']})
    imgWrapper.setAttribute('id',`wrapper${user.id}`)


    const img = createUserImage(user)

    return imgWrapper
    
}

