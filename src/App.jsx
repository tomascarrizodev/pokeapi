import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Components/Container'
import { useState } from 'react'
import { PokeContext } from './Context'

function App() {
    const [main, setMain] = useState(1)
    const context = {
        main,
        setMain
    }
    return (
        <PokeContext.Provider value={context}>
            <BrowserRouter basename='/'>
                <Routes>
                    <Route path="/" element={ <Container /> } />
                </Routes>
            </BrowserRouter>
        </PokeContext.Provider>
    )
}

export default App
