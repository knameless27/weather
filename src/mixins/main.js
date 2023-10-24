export const getImage = (icon) => {
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
};

export const getColor = (icon) => {
  const weather = {
    "01d": "linear-gradient(to right, #f6d365 0%, #fda085 100%)",
    "02d": "linear-gradient(to right, #96fbc4 0%, #f9f586 100%)",
    "03d": "linear-gradient(to right, #ebc0fd 0%, #d9ded8 100%)",
    "04d": "linear-gradient(to right, #93a5cf 0%, #e4efe9 100%)",
    "09d": "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    "10d": "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
    "11d": "linear-gradient(to right, #30cfd0 0%, #330867 100%)",
    "13d": "linear-gradient(to right, #cfd9df 0%, #e2ebf0 100%)",
    "50d": "linear-gradient(to right, #accbee 0%, #e7f0fd 100%)",
  };

  if (weather.hasOwnProperty(icon)) return weather[icon];
  return weather["01d"];
};