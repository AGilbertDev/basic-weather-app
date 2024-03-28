const apiKey = "359e5a0159d629607e9d647dc0007dc3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (city == "" || response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    switch (data.weather[0].main) {
      case "Clear":
          weatherIcon.src = "../images/clear.png";
          weatherIcon.alt = "Clear";
          weatherIcon.title = "Clear";
          break;
  
      case "Clouds":
          weatherIcon.src = "../images/clouds.png";
          weatherIcon.alt = "Clouds";
          weatherIcon.title = "Clouds";
          break;
  
      case "Rain":
          weatherIcon.src = "../images/rain.png";
          weatherIcon.alt = "Rain";
          weatherIcon.title = "Rain";
          break;
  
      case "Drizzle":
          weatherIcon.src = "../images/drizzle.png";
          weatherIcon.alt = "Drizzle";
          weatherIcon.title = "Drizzle";
          break;
  
      case "Mist":
          weatherIcon.src = "../images/rain.png";
          weatherIcon.alt = "Mist";
          weatherIcon.title = "Mist";
          break;
  
      case "Thunderstorm":
          weatherIcon.src = "../images/storm.png";
          weatherIcon.alt = "Thunderstorm";
          weatherIcon.title = "Thunderstorm";
          break;
  
      case "Snow":
          weatherIcon.src = "../images/snow.png";
          weatherIcon.alt = "Snow";
          weatherIcon.title = "Snow";
          break;
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    checkWeather(city);
});