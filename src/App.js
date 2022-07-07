import './App.css';
import SearchBarch from './components/searchBar';
//import CityData from './worldcities.json'
import WeatherCard from './components/weatherCard';
import { React } from 'react';
import { API_URL, API_KEY } from './apis/WeatherApi';
import axios from 'axios';
import DetailedForecast from './components/DetailedForecast';
import Weeklyforecast from './components/WeeklyForecast';
import { useState } from 'react';
function App() {
  // for (let  i in CityData){
  //   console.log("i=",i);
  //   delete CityData[i]["lat"]
  //   delete CityData[i]["lng"]
  //   delete CityData[i]["country"]
  //   delete CityData[i]["iso3"]
  //   delete CityData[i]["iso2"]
  //   delete CityData[i]["admin_name"]
  //   delete CityData[i]["population"]
  //   delete CityData[i]["admin_name"]
  // }
  // const data = JSON.stringify(CityData)
  // fs.writeFile('./myFile.json', JSON.stringify(data), (err) => {
  //   if (err) console.log('Error writing file:', err);
  // })
  const [selectedCity, setSelectedCity] = useState({})
  const [weatherData, setWeatherData] = useState({ daily: [] })
  function changeCity(a) {
    console.log("lolmllllllllll ", a)
    let url = API_URL + `lat=${a.lat}&lon=${a.long}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}&units=metric`
    console.log(url)
    axios.get(url).then((response) => {
      setWeatherData(response.data)
      setSelectedCity(a)
      console.log("la repsonse", response.data)
    })
    // setSelectedCity({})
  }
  if (weatherData.length !== 0) {
    return (
      <div className="App">
        {/* {console.log("am app and I have city ", selectedCity)} */}
        <SearchBarch changeCity={changeCity} placeholder="Search for a city"></SearchBarch>
        <WeatherCard className="WeatherCard" data={selectedCity} dailyForecast={weatherData.daily[0]}></WeatherCard>
        <Weeklyforecast weatherWeeklyData={weatherData}></Weeklyforecast>
      </div>
    );
  }
}
export default App;
