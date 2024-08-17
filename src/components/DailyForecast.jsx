import React from "react";
import MyIcon from "./UI/MyIcon/MyIcon";
import WeatherDetails from "./WeatherDetails";
const DailyForecast = React.memo(({ weather }) => {
  const forecast = weather.forecast;
  const daysForecast = forecast ? forecast.forecastday : [];

  const listData = daysForecast.map((elem, index) => {
    elem.current = elem.day;
    return (
      <div key={index} style={{display: "flex"}}>
        <ul style={{ width: "100%", flex:"0 0 100%" }}>
          <li>
            <MyIcon style={{ width: 40 }} url={elem.day.condition?.icon} />
          </li>
          {/* <div className="v-liider"></div> */}
          <li style={{ margin: "0 10px", width: "7%" }}>
            {elem.day.avgtemp_c}°C
          </li>
          <li className="forecastText">{elem.day.condition.text}</li>
          <li style={{ marginLeft: "auto" }}>
            {new Date(elem.date).getDate()}
          </li>
        </ul>
        {/* <WeatherDetails
          weather={elem}
          style={{flex: "0 0 100%"}}
          forecastMode={true}
        /> */}
      </div>
    );
  });

  return <div className="dailyForecast">{listData}</div>;
});

export default DailyForecast;
