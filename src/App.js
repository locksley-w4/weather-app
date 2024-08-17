import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherAPI from "./API/WeatherAPI.js";
import Current from "./components/Current.jsx";
import InputForm from "./components/InputForm.jsx";
import CurrentDetails from "./components/CurrentDetails.jsx";
import DailyForecast from "./components/DailyForecast.jsx";

function App() {
  const [weather, setWeather] = useState({});
  const [params, setParams] = useState({query: "", lang: "", days: 5});

  async function fetchData() {
    try {
      setWeather({ ...weather, ...(await WeatherAPI.getWeather(params)) });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Current weather={weather}  lang={params.lang}/>
      <InputForm params={params} setParams={setParams} updateFnc={fetchData}/>
      <CurrentDetails weather={weather} lang={params.lang}/>
      <DailyForecast weather={weather}/>
    </div>
  );
}

export default App;
