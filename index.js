 //https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric



const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';

const btn = document.querySelector('.btn')

btn.addEventListener('click', buttonClickHandler)

function buttonClickHandler({target}){

    const selectValue = target.previousElementSibling.value;

    requestApi(selectValue)
    

}

function requestApi(cityName){
    //готуємо URL
    const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}&units=metric`

   

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        displayWeather(data)
    })

}

function displayWeather (weatherObject){

    //деструктуризація обектів
    const{name,main:{temp}, weather:[{description}]}=weatherObject;

    
    const article = document.createElement('article')
    article.classList.add('weather')

    const cityName = document.createElement('p')
    cityName.append(`City name: ${name}`);

    const teperature = document.createElement('p')
    teperature.append(`Temperature: ${temp}°C`);

    const weatherDescription = document.createElement('p')
    weatherDescription.append(`Weather description: ${description}`)

    article.append(cityName, teperature, weatherDescription);

    const section = document.querySelector('.wrapper')
    section.append(article)
}

/*
<article class="weather">
      <p>City name:Kyiv</p>
      <p>Temperatyre: 7</p>
      <p>Weather description</p>
</article>
*/




