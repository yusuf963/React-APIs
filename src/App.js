import FetchJoke from './Component/Joke'
import Weather from './Component/Weather'
import Quote from './Component/Quote'
import AgePridection from './Component/AgePridection'
import CatFact from './Component/CatFact'

import './App.css';

function App() {
  return (
    <>
      <FetchJoke />
      <hr />
      <Weather />
      <hr />
      <Quote />
      <br />
      <hr />
      <AgePridection />
      <br />
      <CatFact />
    </>
  )
}

export default App;
