import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css'

import { setContext } from '@apollo/client/link/context';
import NavbarOne from './components/Nav/Navbar';
import Signup from './components/Signup/Signup';
import ScheduleEvent from './components/ScheduleEvent/ScheduleEvent';
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

import logo from './assets/agoodtimeLogo.png'

const httpLink = createHttpLink({
    uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Router>
                    {/* <h1 className="logo" style={{}}> */}
                        {/* <img src={logo} alt="logo"></img> */}
                    {/* </h1> */}
                    <NavbarOne />
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/schedule-event">
                            <ScheduleEvent />
                        </Route>
                        <Route exact path="/upcoming-events">
                            <UpcomingEvents />
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

