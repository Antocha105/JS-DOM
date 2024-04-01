//async
//await

const URL = 'https://randomuser.me/api'




function loadDataWithoutAsync(url){
    const p = fetch(url);

    const jsonResponse = p.then((response)=>{
        return response.json();
    })

    jsonResponse.then((data)=>{
        console.log(data);
    })
}

//ASYNC/AWAIt

async function loadDataAsync(url){
    const p = fetch(URL);
    const response = await p;
    const data = await response.json()
}
