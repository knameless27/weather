import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getImage } from "../mixins/main.js";
import "../styles/defaultCard.css";

function DefaultCard(props) {
  const navigate = useNavigate();
  const weather = props.weather;
  const date = new Date(0);
  date.setUTCSeconds(weather.dt);
  const weath = weather.weather[0] ?? {};
  const trueDate = new Date(date.toISOString()).toLocaleString();
  const image = getImage(weath.icon);

  useEffect(() => {
    document.querySelector(".card").classList.add("initCard");
  }, []);

  function anotherPlace() {
    document.querySelector(".card").classList.remove("initCard");
    document.querySelector(".card").classList.add("exitCard");
    setTimeout(() => {
      navigate("search");
    }, 1200);
  }

  return (
    <div className="card">
      <div className="info">
        <h1 className="city">
          {weather.name} - {weather.sys.country}
        </h1>
        <div className="basicInfo">
          <h4>clouds: {weather.clouds.all}%</h4>
          <h4>visibility: {weather.visibility}</h4>
        </div>
        <h5>last measurement: {trueDate}</h5>
        <button className="Button" onClick={anotherPlace}>
          See another place
        </button>
      </div>
      <div className="image">
        <div className="containerTitleWeather">
          <img className="weatherImage" src={image} alt="" />
          <h2>{weath.main}</h2>
        </div>
        <h3>{weath.description}</h3>
        <hr />
        <div className="windData">
          <h2 className="titleWind">wind</h2>
          <h4 className="itemWind">speed: {weather.wind.speed}</h4>
          <h4 className="itemWind">deg: {weather.wind.deg}</h4>
          <h4 className="itemWind">gust: {weather.wind.gust}</h4>
        </div>
      </div>
    </div>
  );
}

export default DefaultCard;
