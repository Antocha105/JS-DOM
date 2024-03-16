const div = document.querySelector('#box')


const [red,green] = document.querySelectorAll('.btn')

red.addEventListener('click',redBtnHandler)

function redBtnHandler(event){
    //div.style.backgroundColor = 'red'
    div.classList.add('bg-color-red')
}

green.addEventListener('click', greenBtnHandler)

function greenBtnHandler(event){
   // div.style.backgroundColor = 'green'
   div.classList.add('bg-color-green')
}

