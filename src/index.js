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

function changeName(event) {
  event.preventDefault();
  let changeCityName = document.querySelector("#city");

  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${changeCityName.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeName);
