import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import ErrorPage from './ErrorPage.tsx'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Dogshaiters from './pages/Dogshaiters/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/dogshaiters' element={<Dogshaiters />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <SpeedInsights />
        </Router>
    </React.StrictMode>
)
