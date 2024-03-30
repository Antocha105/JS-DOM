const p = fetch('./user.json')

const jsonPromise = p.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('FINALLY queshion closed')
})

