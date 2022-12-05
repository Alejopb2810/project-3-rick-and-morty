import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  const [location, setLocation] = useState()
  const [inputLocation, setInputLocation] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let URL

    if (inputLocation) {
      URL = `https://rickandmortyapi.com/api/location/${inputLocation}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }


    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [inputLocation])

  const handleSubmit = e => {
    e.preventDefault()
    setInputLocation(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <img className='image__nav' src="https://c.wallhere.com/photos/aa/0e/Rick_and_Morty_digital_art_tv_series_Portal_space-1799919.jpg!d" alt="rick and morty" />
      <form onSubmit={handleSubmit}>
        <input id='inputSearch' type="text" />
        <button>Search</button>
      </form>
      {
        hasError ?
          <ErrorFetch />
          :
          <>
            <LocationInfo location={location} />
            <div className='residents-container'>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url} />
                ))
              }
            </div>
          </>
      }

    </div>
  )
}

export default App
