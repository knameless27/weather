import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const currentWeather = ({ lat, lon }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCityWeather = (city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_API_GEO_WEATHER_URL}direct?q=${city}&limit=1&appid=${apiKey}`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getCity = (city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=eric`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  currentWeather,
  getCityWeather,
  getCity
};
