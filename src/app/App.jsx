import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import { MainFooter } from './components/Footer/MainFooter';
import { MainHeader } from './components/Header/MainHeader';
import './App.scss';

// components
import { Form } from './components/Form/Form';
import { Homepage } from './components/HomePage/Homepage';
import {Toaster} from './components/Form/components/toaster-notification/Toaster';

export const App = () => {
    return (
        <>
        <div id='app-container'>
            <Toaster />
            <MainHeader />
             <Router>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Switch>
                    <Route path="/form">
                        <Form/>
                    </Route>
                </Switch>
            </Router>
        </div>
        <MainFooter />
        </>
    )
}