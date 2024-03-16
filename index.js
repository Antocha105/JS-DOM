const collection = document.getElementsByClassName('paragraph')

//for(let i=0; i<collection.lenght; i++){
//    collection[i].style.color = 'green';
//}

//for...of - цикл що перебирає обьект по ключам

for(let p of collection){
    p.style.color = 'green'
}

const buttons=document.getElementsByTagName('button')
const arr = [...buttons]
console.log(buttons)

arr.forEach((button)=>{
    button.style.color = 'red'
})

function hello(event){
    console.log('Helloworld')
    event.target.addEventListener

}

for(let btn of buttons){
    btn.addEventListener('click', hello)
}