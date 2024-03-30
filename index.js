const p = new Promise(executor) //panding

function executor(resolve,reject){
    
    const number = Math.floor(Math.random()*15)
    if(number%2===0){
        resolve(number)
    } else{
        new RangeError(`Error happened: ${number}`)
        reject(err)
    }
    resolve(); //fullfilled
}

p.then((number)=>{
    console.log(number)
},(error)=>{
    console.log(error)
})