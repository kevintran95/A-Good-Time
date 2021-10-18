import React from 'react'
import NavbarOne from './components/Nav/Navbar'
import Login from './components/Login/Login'
import Calendar from 'react-calendar'

export default function App() {
    return (
        <div>
            <NavbarOne />
            <Login />
            <Calendar />
        </div>
    )
}

