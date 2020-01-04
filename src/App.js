import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

export default function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}