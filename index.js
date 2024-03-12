function getAlert(){
    alert ('Hello user')
}

const button = document.getElementById('button')

button.addEventListener('click',getAlert)




const btn = document.getElementById('btn')

btn.addEventListener('mouseentr',getAlert)

const btnNo = document.getElementById('no-btn')

btnNo.addEventListener('mouseenter',function(){
    btnNo.style.display = 'none';
})

btnNo.addEventListener('mouseleave',function(){
    btnNo.style.display = 'block';
})