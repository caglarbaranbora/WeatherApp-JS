const API_KEY = "";

const date = document.querySelector("#date");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const tempImg = document.querySelector("#temp-img");
const description = document.querySelector("#description");
const tempMax = document.querySelector("#temp-max");
const tempMin = document.querySelector("#temp-min");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.querySelector(".app");

const getWeather = async () => {
  try {
    const cityName = document.getElementById("search-bar-input").value;
    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/3.0/weather?q=${cityName}&appid=${API_KEY}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);
    city.innerHTML = `${weatherData.name}`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
    tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
    tempMin.innerHTML = `${weatherData.main.temp_min}°C`;
  } catch (error) {
    console.log(error);
  }
};
