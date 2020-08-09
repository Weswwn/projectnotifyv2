import React from 'react';
import headerImage from './core/assets/images/ubc-wide.jpg';

// styling
import './App.scss';

// components
import { Form } from './components/Form/Form';

export const App = () => {
    return (
        <div id='app-container'>
            <header className="app-header">
                <h1 style={{marginBottom: '0px'}}>UBC Course Tracker</h1>
                <h2 style={{marginTop: '0px', fontSize:'17px'}}>Register to be notified when the course you want has a spot available!</h2>
                <img src={headerImage}></img>
            </header>
            <div className="homepage-information-container">
                <div className="welcome-text-section-container">
                    <h1>Our Mission</h1>
                    <div>
                        Welcome to Project Notify.
                        Long story short, you need a course that is currently full.
                        You're tired of refreshing the same page over and over again to see if a spot has opened up.
                        That's what we're here for. We'll track the course for you and text you immediately when a spot
                        opens up!
                    </div>
                </div>
                <div className="dev-updates-container">
                    <h1>Developer Updates</h1>
                    <div>
                        Move this to a separate isolated component
                    </div>
                </div>
            </div>
            <div>
                <button className="get-registered-button">Click Here to Register</button>
            </div>
        </div>
    )
}