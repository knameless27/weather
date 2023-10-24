import { useEffect, useState } from "react";
import DefaultCard from "./components/defaultCard";
import weatherApi from "./services/weatherApi.js";
import { getColor } from "./mixins/main";
import "./styles/App.css";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weather, setWeather] = useState({
    clouds: { all: 100 },
    dt: 0,
    main: {
      feels_like: 287.28,
      grnd_level: 1014,
      humidity: 68,
      pressure: 1019,
      sea_level: 1019,
      temp: 287.97,
      temp_max: 288.75,
      temp_min: 286.98,
    },
    name: "Saint-Timothée",
    sys: { country: "CA", sunrise: 1697627719, sunset: 1697666802 },
    timezone: -14400,
    visibility: 10000,
    weather: [
      {
        description: "light rain",
        icon: "10n",
        id: 500,
        main: "Rain",
      },
    ],
    wind: { speed: 3.64, deg: 224, gust: 5.91 },
  });

  if (navigator.geolocation) {
    var success = function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(success, function (msg) {
      console.error(msg);
    });
  }

  useEffect(() => {
    weatherApi.currentWeather({ lat, lon }).then((res) => {
      setWeather(res);
      document.body.style.backgroundImage = getColor(res.weather[0].icon);
    });
  }, [lat, lon]);

  return (
    <div>
      <div className="cardContainer">
        <DefaultCard weather={weather} />
      </div>
    </div>
  );
}

export default App;
