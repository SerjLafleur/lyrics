import React, { useState } from 'react';
import Error from './Error'

const Formulario = ({ setSearchLyrics }) => {

    const [search, setSearch] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)

    const { artista, cancion } = search

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true)
            return
        }

        setError(false)
        setSearchLyrics(search)


    }

    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className='col card text-white bg-transparent mb-5 pt-5 pb-2'>Buscador Letras y Canciones</legend>
                            {error ? <Error message='Todos los campos son obligatorios' /> : null}

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artistas</label>
                                        <input
                                            type='text'
                                            placeholder='Nombre del Artista'
                                            className='form-control'
                                            name='artista'
                                            value={artista}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                            type='text'
                                            placeholder='Nombre de la canción'
                                            name='cancion'
                                            className='form-control'
                                            value={cancion}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >

                                Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;