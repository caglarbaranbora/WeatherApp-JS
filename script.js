const getWeather = async () => {
  const response = await fetch("http://api.weatherapi.com/v1", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = response.json();
  console.log(data);
};

getWeather();
