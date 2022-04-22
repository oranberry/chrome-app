const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // 위도와 경도 숫자를 장소로 바꿔 줄 서비스 사용 (API)
  // openweathermap.org - Current Weather Data
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  // fetch 사용해서 URL 얻기 (실제로 URL 갈 필요 없이 JS가 URL 불러옴)
  // 장소 이름과 날씨
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
// getCurrentPosition 함수는 두개의 arguments 필요
// 1. 모든 게 잘 됐을 때 실행될 함수
// 2. 에러가 발생했을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);