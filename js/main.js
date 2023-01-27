const apikey = "4fde8dead64bc5338e32f88cfeae02d2";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const temElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const conteiner = document.querySelector("#weather-data")

const getWeatherData = async(city) =>{
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`

    const res = await fetch(apiURL)
    const data = await res.json()

    return data


}


const showWeatherData = async(city) =>{

    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    temElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    umidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`

    conteiner.classList.remove("hide");
}


searchBtn.addEventListener("click", (e) =>{

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

});


cityInput.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city)
    }
});







