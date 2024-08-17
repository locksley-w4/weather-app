import axios from "axios";
class WeatherAPI {
    static getKey = () => "e394b4fd8d0e4c4a8f8101523241208";
    static async getWeather(params) {
        const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${WeatherAPI.getKey()}&q=${params.query || "Tashkent"}&lang=${params.lang || "ru"}&days=${params.days || 5}`);
        return res.data
    }
}
export default WeatherAPI