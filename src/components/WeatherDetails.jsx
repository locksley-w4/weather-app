import React from "react";
import MyIcon from "./UI/MyIcon/MyIcon";
import HourlyData from "./HourlyData";

const CurrentDetails = React.memo(({ weather, lang, forecastMode, ...props }) => {
  const current = weather.current;
  // const forecast = weather.forecast;

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

  return (
    <table className="currentDetails" {...props}>
      <tbody>
        {!forecastMode && <HourlyData weather={weather} />}
        <tr>
          <td>{titles.feelslike[lang || "ru"]}</td>
          <td>{current?.feelslike_c ?? current?.avgtemp_c}°C</td>
        </tr>
        <tr>
          <td>{titles.precip[lang || "ru"]}</td>
          <td>{current?.precip_mm ?? current?.totalprecip_mm}</td>
        </tr>
        <tr>
          <td>{titles.humidity[lang || "ru"]}</td>
          <td>{current?.humidity ?? current?.avghumidity}</td>
        </tr>
        {!forecastMode && (
          <tr>
            <td>{titles.clouds[lang || "ru"]}</td>
            <td>{current?.cloud}</td>
          </tr>
        )}
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
