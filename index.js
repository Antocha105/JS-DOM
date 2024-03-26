/*function hello(){
    alert('HELLO USER!')
}

setTimeout(hello, 8000)
*/

function count(){
    let i = 1;
    const intervalId = setInterval(()=>{
        console.log(i++);
        if(i>20){
            clearInterval(intervalId);
        }
    },1000);
}