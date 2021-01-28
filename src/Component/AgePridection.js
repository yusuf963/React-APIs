import React from 'react';
import { useState } from 'react'

const AgePridection = () => {
  const [prediction, updatePridection] = useState('')
  const [personName, updatePersonName] = useState('')
  const fetchingData = async () => {
    try {
      const res = await fetch(`https://api.agify.io?name=${personName}`)
      const data = await res.json()
      updatePridection(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  // const updateValue = () => {
  //   updatePridection('')
  //   updatePersonName('')
  // }
  return (
    <>
      <label>Enter a name to pridect the age</label>
      <input onChange={(e) => updatePersonName(e.target.value)}
        placeholder='enter name here' type="text" />
      <button onClick={() => fetchingData()}>click here</button>
      {personName ? <h3>{personName}'s age is {prediction.age}</h3> : ''}
    </>
  )
}

export default AgePridection