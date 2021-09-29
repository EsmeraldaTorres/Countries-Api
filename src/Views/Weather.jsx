import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import "../styles/Weather.css"
import HeightIcon from '@material-ui/icons/Height';
import ToysIcon from '@material-ui/icons/Toys';
import OpacityIcon from '@material-ui/icons/Opacity';

const Weather = props =>{
    const {capital} = useParams();
    // Estado
    const [information, setInformation] = useState([])

    const weatherInformation = async ()=>{
    try{
        const answerApi = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=f414ea4cda4b3c1ee3c2896e8ca2e32c`)
        const response = await answerApi.json()
        console.log(response)
        const {icon} = response.weather[0]
        const {description} = response.weather[0]
        const {feels_like} = response.main
        const {all} = response.clouds
        const {timezone} = response
        const feels = Math.round(feels_like -273.15)
        const {temp_max} = response.main
        const {temp_min} = response.main
        const {lat} = response.coord
        const {lon} = response.coord
        const {humidity} = response.main
        const HTemp = Math.round(temp_max - 273.15)
        const LTemp = Math.round(temp_min - 273.15)
        const {temp} = response.main
        const temper = Math.round(temp-273.15);
        const {speed} = response.wind
        const {pressure} = response.main
        const {sea_level} = response.main
        setInformation({timezone,humidity,icon,sea_level,pressure,feels,speed,lat, HTemp, LTemp, lon, description,all, temper,})
      }catch(error){
        console.log(error)
      }}

      useEffect(() => {
        weatherInformation();
      }, []);

    return(
        <>
        <Header/>
        <section className="padding">
        <div className="weather-card">
            <p className="wea-in">Weather in: {capital}</p>
              <div className="display-flex">
                <div>
                  <p className="grades">{information.temper}°</p>
                  <p>{information.description}</p>
                </div>
                <img src={`http://openweathermap.org/img/wn/${information.icon}@2x.png`} alt="icon"/>
              </div>
              <p className="rain">{information.all}% rain probability</p>
        </div>
        <div className="weather-details-container">
          <h3>Weather Today in {capital}</h3>
          <div className="space">
              <p>{information.temper}° Celsius</p>
              <p className="line-end">{information.description}</p>
            <p className="line-end">Feels Like: {information.feels}°</p>
          </div>
          <div className="weather-details">
          <div className="details">
            <div className="display-flex">
              <HeightIcon/>
              <p>Max/Min</p>
            </div>
            <div>
              <p>{information.HTemp}/{information.LTemp}</p>
            </div>
          </div>
          <div className="details">
            <div className="display-flex">
              <ToysIcon/>
              <p>Wind</p>
            </div>
            <p>{information.speed}</p>
          </div>
          <div className="details">
            <div className="display-flex">
              <OpacityIcon/>
              <p>Humidity</p>
            </div>
            <p>{information.humidity}</p>
          </div>
          <div className="details">
            <div className="display-flex">
              <OpacityIcon/>
              <p>Pressure</p>
            </div>
            <p>{information.pressure}</p>
          </div>
          <div className="details">
            <div className="display-flex">
              <OpacityIcon/>
              <p>Sea Level</p>
            </div>
            <p>{information.sea_level}</p>
          </div>
          <div className="details">
            <div className="display-flex">
              <OpacityIcon/>
              <p>Timezone</p>
            </div>
            <p>{information.timezone}</p>
          </div>
          <div className="details">
            <div className="display-flex">
              <OpacityIcon/>
              <p>Latitud</p>
            </div>
            <p>{information.lat}</p>
          </div>
          <div className="details">
            <div className="display-flex">
              <OpacityIcon/>
              <p>Longitud</p>
            </div>
            <p>{information.lon}</p>
          </div>
          </div>
        </div>
        </section>
        </>
    )
}

export default Weather