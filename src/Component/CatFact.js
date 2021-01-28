import React from 'react'
import { useState } from 'react'

const CatFact = () => {
  const [fact, updateFact] = useState('')
  const fetchingData = async () => {
    try {
      const res = await fetch('https://cat-fact.herokuapp.com/facts#')
      const data = await res.json()
      updateFact(data)
      console.log(fact)
    } catch (err) {
      console.error(err)
    }
  }
  const mappingData = () => {
    fact.map(item => {
      const factText = item.text

      console.log(factText)
    })
  }

  return (
    <>
      <h1>hello cat</h1>
      <button onClick={() => fetchingData()}>Get Cat Fact</button>
      <button onClick={() => mappingData()}>Get Cat Fact</button>
    </>
  )
}

export default CatFact