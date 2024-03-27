const apiKey = "359e5a0159d629607e9d647dc0007dc3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sainte-sophie";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}