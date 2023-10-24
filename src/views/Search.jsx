import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosWeather from "../services/weatherApi";
import Input from "../components/input";
import { getImage, getColor } from "../mixins/main";
import "../styles/search.css";

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({ name: "" });
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({
    clouds: {
      all: 0,
    },
    main: { humidity: "" },
    visibility: "",
    trueDate: "",
    image: getImage(),
    weather: [{ description: "", main: "" }],
    wind: { deg: "", speed: "" },
  });

  useEffect(() => {
    document.querySelector(".card").classList.add("initCard");
  }, []);

  function anotherPlace() {
    document.querySelector(".card").classList.remove("initCard");
    document.querySelector(".card").classList.add("exitCard");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  }

  function onChangeData(newData) {
    setQuery(newData);
    axiosWeather
      .currentWeather({ lat: newData.lat, lon: newData.lng })
      .then((res) => {
        const newIcon = getImage(res.weather[0].icon);
        const date = new Date(0);
        date.setUTCSeconds(res.dt);
        const trueDate = new Date(date.toISOString()).toLocaleString();
        res.image = newIcon;
        res.trueDate = trueDate;
        document.body.style.backgroundImage = getColor(res.weather[0].icon);
        setData(res);
      });
  }

  function onSearch(newData) {
    axiosWeather.getCity(newData).then((res) => {
      const newOptions = res.geonames.map((city) => {
        city.name = city.name + " - " + city.countryName;
        return city;
      });
      setOptions(newOptions);
    });
  }

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="info">
          <Input
            data={query}
            query="name"
            options={options}
            onChangeData={onChangeData}
            onSearch={onSearch}
            className="input"
          />
          <div className="basicInfo">
            <h4>clouds: {data.clouds.all}%</h4>
            <h4>visibility: {data.visibility}</h4>
          </div>
          <h5>last measurement: {data.trueDate}</h5>
          <button className="Button" onClick={anotherPlace}>
            Go back
          </button>
        </div>
        <div className="image">
          <div className="containerTitleWeather">
            <img className="weatherImage" src={data.image} alt="" />
            <h2>{data.weather[0].main}</h2>
          </div>
          <h3>{data.weather[0].description}</h3>
          <hr />
          <div className="windData">
            <h2 className="titleWind">wind</h2>
            <h4 className="itemWind">speed: {data.wind.speed}</h4>
            <h4 className="itemWind">deg: {data.wind.deg}</h4>
            <h4 className="itemWind">humidity: {data.main.humidity}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
