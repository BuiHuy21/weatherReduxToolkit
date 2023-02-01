import axios from "axios";

export default function requestWeather(lat, lon) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=fa6c9810fd8899851d3d364053f46de8`
  );
}
// apikey fa6c9810fd8899851d3d364053f46de8

// 84f0c05e16abc57b03ca8fa00b59f78e

// http://api.openweathermap.org/data/2.5/weather?q=hanoi&APPID=8be346cc190753993a74e089aa7b6d57&units=metric
