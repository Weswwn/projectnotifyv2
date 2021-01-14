import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import { MainHeader } from './components/Header/MainHeader';
import ScrollToTop from './ScrollToTop';
import './App.scss';

// components
import { Form } from './components/Form/Form';
import { Homepage } from './components/HomePage/Homepage';
import { Toaster } from './components/Form/components/toaster-notification/Toaster';

export const App = () => {
    useEffect(() => {
        Toaster.hide();
    })
    return (
        <>
            <div id='app-container'>
                <Toaster />
                <Router>
                    <ScrollToTop />
                    <Route exact path="/">
                        <MainHeader />
                        <Homepage />
                    </Route>

                    <Switch>
                        <Route path="/form">
                            <Form />
                        </Route>
                    </Switch>
                    {/* <Redirect from="*" to="/" /> */}
                </Router>
            </div>
        </>
    )
}