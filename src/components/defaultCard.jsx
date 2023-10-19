import "../styles/defaultCard.css";

function DefaultCard(props) {
  const weather = props.weather;
  const date = new Date(0);
  date.setUTCSeconds(weather.dt);
  const weath = weather.weather[0] ?? {};
  const trueDate = new Date(date.toISOString()).toLocaleString();
  const image = getImage(weath.icon);

  return (
    <div className="card">
      <div className="info">
        <h1 className="city">
          {weather.name} - {weather.sys.country}
        </h1>
        <div className="basicInfo">
          <h4>clouds: {weather.clouds.all}</h4>
          <h4>visibility: {weather.visibility}</h4>
        </div>
        <h5>last measurement: {trueDate}</h5>
        <button className="Button">See another place</button>
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

function getImage(icon) {
  const weather = {
    "01d":
      "https://cdn-icons-png.flaticon.com/512/2698/2698194.png?ga=GA1.1.1295202294.1695664206",
    "02d":
      "https://cdn-icons-png.flaticon.com/512/2932/2932604.png?ga=GA1.1.1295202294.1695664206",
    "03d":
      "https://cdn-icons-png.flaticon.com/512/3208/3208676.png?ga=GA1.1.1295202294.1695664206",
    "04d":
      "https://cdn-icons-png.flaticon.com/512/414/414927.png?ga=GA1.1.1295202294.1695664206",
    "09d":
      "https://cdn-icons-png.flaticon.com/512/1164/1164945.png?ga=GA1.1.1295202294.1695664206",
    "10d":
      "https://cdn-icons-png.flaticon.com/512/3093/3093390.png?ga=GA1.1.1295202294.1695664206",
    "11d":
      "https://cdn-icons-png.flaticon.com/512/1146/1146860.png?ga=GA1.1.1295202294.1695664206",
    "13d":
      "https://cdn-icons-png.flaticon.com/512/4040/4040796.png?ga=GA1.1.1295202294.1695664206",
    "50d":
      "https://cdn-icons-png.flaticon.com/512/3861/3861484.png?ga=GA1.1.1295202294.1695664206",
  };

  if (weather.hasOwnProperty(icon)) return weather[icon];
  return weather["01d"];
}

export default DefaultCard;
