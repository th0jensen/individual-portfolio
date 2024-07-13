import Header from './Header'
import Biography from './pages/Biography'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Stack from './pages/Stack'
import Footer from './Footer'
import { useState, useEffect } from 'react'

export default function App() {
    const [onScroll, setOnScroll] = useState<boolean>(false)

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 1 ? setOnScroll(true) : setOnScroll(false)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [onScroll])

    return (
        <div>
            <Header onScroll={onScroll} />
            <Biography />
            <Education />
            <Projects />
            <Stack />
            <Footer />
        </div>
    )
}
