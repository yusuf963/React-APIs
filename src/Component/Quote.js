import React from 'react';
import { useState } from 'react'

const Quote = () => {

  const [quote, updateQuote] = useState('')
  const getQoute = async () => {
    const proxyUrl = 'https://stormy-atoll-29846.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try {
      const res = await fetch(proxyUrl + apiUrl)
      const data = await res.json()
      updateQuote(data)
      console.log(quote)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <h2>{quote.quoteText}</h2>
      {quote.quoteText ? <h4> Author: {quote.quoteAuthor}</h4> : <h4></h4>}
      <button onClick={() => getQoute()}>Get Quote</button>
    </>
  )
}
export default Quote