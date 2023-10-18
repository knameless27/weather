import "./styles/defaultCard.css";

function DefaultCard(props) {
  const weather = props.weather;
  const date = new Date(0);
  date.setUTCSeconds(weather.dt);

  const trueDate = date.toISOString();

  return (
    <div className="card">
      <div className="info">
        <h1>{weather.name}</h1>
        clouds{weather.clouds.all}
        time{trueDate}
      </div>
      <div className="imagen"></div>
    </div>
  );
}

export default DefaultCard;
