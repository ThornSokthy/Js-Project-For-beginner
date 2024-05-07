const apiKey = "e39bff5716f55caab376438b297f1816";

async function search() {
  const phrase = document.querySelector('input[type="text"').value;

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${phrase}&limit=5&appid=${apiKey}`
  );
  const data = await response.json();

  const ul = document.querySelector("form ul");
  ul.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const { name, lat, lon, country } = data[i];
    ul.innerHTML += `<li data-lat="${lat}" 
    data-lon="${lon}" data-name="${name}">${name} 
    <span>${country}</span></li>`;
  }
}

const showWeather = async (lat, lon, name) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  const temp = Math.floor(data.main.temp);
  const feelsLike = data.main.feels_like;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const icon = data.weather[0].icon;

  document.querySelector("#degree").innerHTML = temp + "&#8451;";
  document.querySelector("#city").innerHTML = name;
  document.querySelector("#wind-value").innerHTML = wind + "<span>km/h</span>";
  document.querySelector("#feels-like-value").innerHTML =
    feelsLike + "<span><span>%</span></span>";
  document.querySelector("#humidity-value").innerHTML =
    humidity + "<span>%</span>";
  document.querySelector(
    "#icon"
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  document.querySelector("form").style.display = "none";
  document.querySelector("#weather").style.display = "block";
};

const debouncedSearch = _.debounce(() => {
  search();
}, 600);

document
  .querySelector('input[type="text"')
  .addEventListener("keyup", debouncedSearch);

document.body.addEventListener("click", (e) => {
  const li = e.target;
  const { lat, lon, name } = li.dataset;
  localStorage.setItem("lat", lat);
  localStorage.setItem("lon", lon);
  localStorage.setItem("name", name);
  if (!lat) return;
  showWeather(lat, lon, name);
});

document.querySelector("#change").addEventListener("click", () => {
  document.querySelector("form").style.display = "block";
  document.querySelector("#weather").style.display = "none";
});

document.body.onload = () => {
  if (localStorage.getItem("lat")) {
    const lat = localStorage.getItem("lat");
    const lon = localStorage.getItem("lon");
    const name = localStorage.getItem("name");

    showWeather(lat, lon, name);
  }
};
