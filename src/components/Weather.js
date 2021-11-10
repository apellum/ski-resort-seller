import React, { useState, useEffect } from 'react'
import { apiUrl } from '../GlobalVariable'

const Weather = () => {
    const [weather, setWeather] = useState({})
    const [initialLoad, setInitialLoad] = useState(false)

    useEffect(() => {
        if (!initialLoad)
            fetch(`${apiUrl}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setWeather(data)
                    setInitialLoad(true)
                })
    }
        , [initialLoad])
        console.log(weather)

    const kelvinToFarenheight = (k) => {
        return (((k - 273.15) * 1.8) + 32).toFixed()
    }
    debugger
    if (weather.main || weather.weather) {


        return (
            <div>
                <p>Mountaintop Weather: {kelvinToFarenheight(weather.main.temp)}°F</p>
                <p>Mountaintop Forecast: {weather.weather[0].description}</p>

            </div>
        )
    } else 
        return null
}

export default Weather
