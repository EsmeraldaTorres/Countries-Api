import React, {useEffect, useState} from "react"

const IconWeather = props =>{
const {capital} = props
const [icon,setIcon]= useState([])

const fetchWeatherApi = async()=>{
    try{
        const answerApi = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=f414ea4cda4b3c1ee3c2896e8ca2e32c`)
        const response = await answerApi.json()
        const {temp} = response.main
        console.log(temp)
        setIcon(temp)
    }
    catch(error){
    console.log(error)
    }
}
useEffect(() => {
    fetchWeatherApi()
  }, [])


    return(
        <div>
            <p>{capital}</p>
        </div>
    )
}
export default IconWeather