const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=666e90ce377c0f3be3c61944a6567112&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=f";

  request({ url: url, json: true }, (error, { body } = {}) => {
    console.log(body);
    if (error) {
      callback("Unable to connect to weather service!" + error, undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const current = body.current;
      callback(
        undefined,
        "It is currently " +
          current.temperature +
          " degress out. It feels like " +
          current.feelslike +
          " degress out"
      );
    }
  });
};

module.exports = forecast;
