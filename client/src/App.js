import React from 'react';
import NavbarOne from './components/Nav/Navbar';
import Signup from './components/Signup/Signup';
import Calendar from 'react-calendar';
import ScheduleEvent from './components/CreateEvent/CreateEvent';

export default function App() {
    return (
        <div>
            <ScheduleEvent />
        </div>
    )
}

