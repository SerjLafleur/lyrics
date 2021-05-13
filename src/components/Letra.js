import React from 'react';

const Letra = ({ lyric }) => {

    if (lyric.length === 0) return null
    return (
        <>
            <h2>Letra Canción</h2>
            <p className='letra'>{lyric}</p>
        </>
    );
}

export default Letra;
