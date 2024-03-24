/*<article class="card-wrapper">
      <img class="card-image" src="https://pm1.aminoapps.com/6750/dddd7fbf857879e7a4513d20a85c1c89d5d74a41v2_hq.jpg" alt="John avatar">
      <h2 class="user-name">John</h2>
      <p class="deccription">Deskription for John</p>
    </article>
    */

const johnObject = {
        id: 1,
        name: 'John',
        description: 'Description for John',
        profilePicture: 'https://illustrators.ru/uploads/illustration/image/1705348/IMG_20221224_003828_372.jpg'
    }

const root = document.querySelector('#root')

function createUserCard(user){

    const article = document.createElement('article');
    article.classList.add('card-wrapper')

    const img = document.createElement('img')
    img.setAttribute('src',user.profilePicture)
    img.setAttribute('alt',user.name)
    img.classList.add('card-image')

    const h2 = document.createElement('h2')
    h2.append(user.name)
    h2.classList.add('username')

    const p = document.createElement('p')
    p.append(user.description)
    p.classList.add('description')

    article.append(img, h2, p)

    
    return article;
}

const cardArray = data.map(user => createUserCard(user));

root.append(...cardArray);