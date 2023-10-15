import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import TodayTodos from './components/TodayTodos/TodayTodos'

// ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todayTodos" element={<TodayTodos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
