import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = `3b56b513621da34b878265f5105ec957`;

  let getWeatherInfo = async () => {
    try {
      let response = await axios.get(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data);
      let result = {
        city: city,
        temp: response.data.main.temp,
        mintemp: response.data.main.temp_min,
        maxtemp: response.data.main.temp_max,
        humidity: response.data.main.humidity,
        weather: response.data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div className="flex-col  text-center mb-5 items-center ">
        <br />

        <br />
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="CityName"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <Button
            className=""
            variant="contained"
            endIcon={<SearchIcon />}
            type="submit"
          >
            Search
          </Button>
          {error && <p className="text-red-600">No such place in api</p>}
        </form>
      </div>
    </>
  );
}
