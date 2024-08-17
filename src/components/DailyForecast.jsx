import React from "react";
import MyIcon from "./UI/MyIcon/MyIcon";

const DailyForecast = React.memo(({ weather }) => {
  const forecast = weather.forecast;
  const daysForecast = forecast ? forecast.forecastday : [];
  
  const listData = daysForecast.map((elem, index) => (
    <ul key={index}>
      <li>
        <MyIcon style={{ width: 40 }} url={elem.day.condition?.icon} />
      </li>
      {/* <div className="v-liider"></div> */}
      <li style={{ margin: "0 10px", width: "7%" }}>{elem.day.avgtemp_c}°C</li>
      <li className="forecastText">{elem.day.condition.text}</li>
      <li style={{ marginLeft: "auto" }}>{new Date(elem.date).getDate()}</li>
    </ul>
  ));

  return <div className="dailyForecast">{listData}</div>;
});

export default DailyForecast;
