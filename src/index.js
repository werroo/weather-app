let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${day} ${hour}:${minutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("#city-name");
  let currentTemperature = document.querySelector(".current-value");
  currentTemperature.innerHTML = `${temperature}`;
  cityName.innerHTML = response.data.city;
}

function changeName(event) {
  event.preventDefault();

  let searchOutputElement = document.querySelector("#city");

  let city = searchOutputElement.value;
  let apiKey = `04b5fc5oc9b0fe6f93atfbe5cc26da36`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeName);
