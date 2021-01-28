import React from 'react';
import { useState, useEffect } from 'react'
//https://v2.jokeapi.dev/joke/Any
const FetchJoke = () => {
  const [joke, updateJoke] = useState('')
  const fettchingData = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
      .then(res => res.json())
      .then(data => updateJoke(data))
  }
  // useEffect(() => {
  //   fettchingData()
  // }, [])


  return (
    <>
    <h2>{joke.setup}</h2>
    <h2>{joke.delivery}</h2>
    <button onClick={()=>fettchingData()}>Get Joke</button>
    </>
    
  )
}

export default FetchJoke