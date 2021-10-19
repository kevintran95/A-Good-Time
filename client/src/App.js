import React from 'react'
import NavbarOne from './components/Nav/Navbar'
import Signup from './components/Signup/Signup'
import Calendar from 'react-calendar'

export default function App() {
    return (
        <div>
            <NavbarOne />
            <Signup />
            <Calendar />
        </div>
    )
}

