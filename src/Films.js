import React from 'react'

const Films = ({dados, setDados}) => {

    const style = {
        background: 'black',
        color: 'white',
        borderRadius: '6px',
        padding: '5px',
        cursor: 'pointer'
    }

    function mode() {
        setDados(!dados)
        console.log('clicou')
    }

    return (
        <section>
            <p>Title: {dados.title}</p>
            <p>Diretor: {dados.director}</p>
            <p>Produção: {dados.producer}</p>
            <p>Data: {dados.release_date}</p>
            <button style={style} onClick={mode}>Recolher</button>
        </section>
    )

}

export default Films
