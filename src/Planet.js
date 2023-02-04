import React from 'react'

const Planet = ({date, setDate}) => {

    function mode() {
        setDate(!date)
        console.log('clicou')
    }

    const style = {
        background: 'black',
        color: 'white',
        borderRadius: '6px',
        padding: '5px',
        cursor: 'pointer'
    }

    return (
        <section>
            <p>Name: {date.name}</p>
            <p>Diameter: {date.diameter}</p>
            <p>climate: {date.climate}</p>
            <p>population: {date.population}</p>
            <p>gravity: {date.gravity}</p>
            <p>Terrain: {date.terrain}</p>
            <button style={style} onClick={mode}>Recolher</button>
        </section>
    )

}

export default Planet

