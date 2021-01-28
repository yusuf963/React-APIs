import React from 'react'
import { useState } from 'react'

//https://fantasy.premierleague.com/api/bootstrap-static/
//https://medium.com/@frenzelts/fantasy-premier-league-api-endpoints-a-detailed-guide-acbd5598eb19

// const apiKey = '5cff77681bc5df9617cb2d7bdb97efc8'
const Weather = () => {
  const [weather, updateWeather] = useState('')
  const fetchingData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=5cff77681bc5df9617cb2d7bdb97efc8&units=metric`)
    const data = await res.json()
    updateWeather(data)
    // console.log(weather.main.temp)
    console.log(weather.name)
    console.log(weather)
    console.log(weather.weather[0].main)
  }
  // useEffect(() => {
  //   fetchingData()
  // },[])

  return (
    <>
      <h2>Weather Temprature in London is: {weather.name}C</h2>
      <h2>Weather Temprature in London is: {weather.id}C</h2>
      {/* <h2>Weather Temprature in London is: {weather.weather.description}C</h2> */}
      <button onClick={() => fetchingData()}>get Weather data</button>
    </>
  )
}

export default Weather