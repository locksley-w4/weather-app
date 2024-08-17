import React from "react";
import MyIcon from "./UI/MyIcon/MyIcon";

const CurrentDetails = React.memo(({ weather, lang }) => {
  const current = weather.current;
  const forecast = weather.forecast;

  const currentHour = current
    ? current.last_updated?.split(" ")[1].slice(0, 2)
    : "";

  const titles = {
    feelslike: {
      ru: "Ощущается",
      en: "Feels like",
    },
    precip: {
      ru: "Осадки (мм)",
      en: "Precipitation (mm)",
    },
    humidity: {
      ru: "Влажность",
      en: "Humidity",
    },
    clouds: {
      ru: "Облачность",
      en: "Cloud",
    },
    windspeed: {
      ru: "Скорость ветра",
      en: "Windspeed",
    },
    UV: {
      ru: "УФ",
      en: "Humidity",
    },
    pressure: {
      ru: "Давление (мбар)",
      en: "Pressure (mb)",
    },
  };

  let dataByHours = forecast
    ? [...forecast?.forecastday[0].hour, ...forecast?.forecastday[1].hour]
    : [];

  const currentElemIndex = dataByHours.findIndex(
    (elem) => elem.time.split(" ")[1].slice(0, 2) === currentHour
  );
  dataByHours = dataByHours.splice(currentElemIndex, 24);

  const dataByHoursTDs = dataByHours.map((elem, index) => {
    const time = elem.time.split(" ")[1];
    return (
      <td key={index} time={time}>
        <span style={{ marginBottom: "10px" }}>{time}</span>
        <MyIcon style={{ width: 40 }} url={elem.condition.icon} />
        <span>{elem.temp_c}°C</span>
        <span className="cond">{elem.condition.text}</span>
      </td>
    );
  });

  return (
    <table className="currentDetails">
      <tbody>
        <tr className="hourlyData">{dataByHoursTDs}</tr>
        <tr>
          <td>{titles.feelslike[lang || "ru"]}</td>
          <td>{current?.feelslike_c}°C</td>
        </tr>
        <tr>
          <td>{titles.precip[lang || "ru"]}</td>
          <td>{current?.precip_mm}</td>
        </tr>
        <tr>
          <td>{titles.humidity[lang || "ru"]}</td>
          <td>{current?.humidity}</td>
        </tr>
        <tr>
          <td>{titles.clouds[lang || "ru"]}</td>
          <td>{current?.cloud}</td>
        </tr>
        <tr>
          <td>{titles.windspeed[lang || "ru"]}</td>
          <td>{current?.wind_mph} m/s</td>
        </tr>
        {/* <tr>
          <td>Направление ветра</td>
          <td>{getWindDir(current?.wind_dir)}</td>
        </tr> */}
        <tr>
          <td>{titles.UV[lang || "ru"]}</td>
          <td>{current?.uv}</td>
        </tr>
        <tr>
          <td>{titles.pressure[lang || "ru"]}</td>
          <td>{current?.pressure_mb} мбар</td>
        </tr>
      </tbody>
    </table>
  );
});
export default CurrentDetails;
