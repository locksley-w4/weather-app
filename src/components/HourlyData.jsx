import React from "react";
import MyIcon from "./UI/MyIcon/MyIcon";

const HourlyData = ({ weather }) => {
  const current = weather.current;
  const forecast = weather.forecast;

  const currentHour = current
    ? current.last_updated?.split(" ")[1].slice(0, 2)
    : "";
  let dataByHours = forecast
    ? [...forecast?.forecastday[0].hour, ...forecast?.forecastday[1].hour]
    : [];

  const currentElemIndex = dataByHours.findIndex(
    (elem) => elem.time.split(" ")[1].slice(0, 2) === currentHour
  );
  dataByHours = dataByHours.splice(currentElemIndex, 24);

  const dataByHoursTableData = dataByHours.map((elem, index) => {
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

  return <tr className="hourlyData">{dataByHoursTableData}</tr>;
};

export default HourlyData;
