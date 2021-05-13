import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Formulario from './components/Formulario'
import Letra from './components/Letra'
import Información from './components/Información'

function App() {


  const [searchLyrics, setSearchLyrics] = useState({})
  const [lyric, setLyric] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) return

    const callApi = async () => {
      const { artista, cancion } = searchLyrics
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`


      const [lyric, info] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      setLyric(lyric.data.lyrics)
      setInfo(info.data.artists[0])
    }
    callApi()
  }, [searchLyrics])


  return (
    <>
      <Formulario
        setSearchLyrics={setSearchLyrics}
      />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Información
              info={info}
            />
          </div>
          <div className='col-md-6'>
            <Letra lyric={lyric} />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
