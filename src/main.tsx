import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import ErrorPage from './ErrorPage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
