import React from 'react';
import Planet from './Planet';
import Films from './Films';
import './App.css'

const App = () => {

    const style = {
        background: 'black',
        margin: '5px',
        borderRadius: '5px',
        padding: '8px',
        color: 'white',
        cursor: 'pointer',
        textAlign: 'center'
    }

    const display = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

    let [dados, setDados] = React.useState(null)
    let [date, setDate] = React.useState(null)

    async function apiFIlms(event) {
        const url = await fetch(`https://swapi.dev/api/films/${event.target.id}`)
        const res = await url.json()
        setDados(res)
    }

    async function api(event) {
        const url = await fetch(`https://swapi.dev/api/planets/${event.target.id}`)
        const res = await url.json()
        setDate(res)
    }

    return (
        <div className="App"> 
        <header className='App-header'>
                <h3 style={display}>CLIQUE E RECEBA INFORMAÇÕES DE FILMES DE STARS WARS.</h3>
                <div style={display}>
                    <buttton style={style} onClick={apiFIlms} id='1'>Filme 1</buttton>
                    <buttton style={style} onClick={apiFIlms} id='2'>Filme 2</buttton>
                    <buttton style={style} onClick={apiFIlms} id='3'>Filme 3</buttton>
                    <buttton style={style} onClick={apiFIlms} id='4'>Filme 4</buttton>
                    <buttton style={style} onClick={apiFIlms} id='5'>Filme 5</buttton>
                    <buttton style={style} onClick={apiFIlms} id='6'>Filme 6</buttton>
                </div>
                {dados && <Films setDados={setDados} dados={dados}/>}
                <h3 style={display}>CLIQUE E RECEBA INFORMAÇÕES DE PLANETAS DE STARS WARS.</h3>
                <div style={display}>
                    <buttton style={style} onClick={api} id='1'>Planeta 1</buttton>
                    <buttton style={style} onClick={api} id='2'>Planeta 2</buttton>
                    <buttton style={style} onClick={api} id='3'>Planeta 3</buttton>
                    <buttton style={style} onClick={api} id='4'>Planeta 4</buttton>
                    <buttton style={style} onClick={api} id='5'>Planeta 5</buttton>
                    <buttton style={style} onClick={api} id='6'>Planeta 6</buttton>
                </div>
                {date && <Planet setDate={setDate} date={date}/>}
                <p></p>
                <b style={display}>@ptrktodev</b>
        </header>
        </div>
    )

}

export default App;