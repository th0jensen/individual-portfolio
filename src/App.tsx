// import { useState } from 'react'
import './App.css'
import Header from './Header'
import Biography from './pages/Biography'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Stack from './pages/Stack'
// import portfolioData, { Data } from './data'

function App() {
    // const [data, setData] = useState<Data>(portfolioData)

    return (
        <>
            <Header />
            <Biography />
            <Education />
            <Projects />
            <Stack />
        </>
    )
}

export default App
