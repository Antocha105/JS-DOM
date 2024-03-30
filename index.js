const p = new Promise(executor);


function executor(resolve, reject){
    setTimeout(()=>{
        resolve('It time')
    },15000)
}

const h1 = document.querySelector('#root')

p.then((str)=>{
    h1.append(str)
})