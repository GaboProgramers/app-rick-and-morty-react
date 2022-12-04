import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import PrincipalTitle from './components/PrincipalTitle'

function App() {

  // ? estados para guardar locacion y cambio del input
  const [location, setLocation] = useState()
  const [inputSearch, setInputSearch] = useState()
  const [hasError, setHasError] = useState(true)


  // ? eccion de obtencion de datos
  useEffect(() => {

    let URL

    if (inputSearch) {
      URL = `https://rickandmortyapi.com/api/location/${inputSearch}`
    } else {
      const ramdomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${ramdomIdLocation}`
    }

    axios
      .get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err);
      })
  }, [inputSearch])


  // ? seccion de boton de busqueda
  const handleSubmit = e => {
    e.preventDefault()
    setInputSearch(e.target.inputId.value)
  }


  return (
    <div className="App">
      <PrincipalTitle />
      <form className='form__container' onSubmit={handleSubmit}>
        <input className='form__input' id='inputId' type="text" placeholder='Introduce un ID entre 1 - 126' />
        <button className='form__btn'>Search</button>
      </form>
      {
        hasError ?
          <ErrorFetch />
          :
          <>
            <LocationInfo location={location} />
            <div className="residenContainer">
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