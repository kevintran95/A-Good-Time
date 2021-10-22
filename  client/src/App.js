import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavbarOne from './components/Nav/Navbar';
import Signup from './components/Signup/Signup';
import ScheduleEvent from './components/ScheduleEvent/ScheduleEvent';
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Router>
                <NavbarOne />
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/schedule-event">
                            < ScheduleEvent />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ApolloProvider>

    )
}

