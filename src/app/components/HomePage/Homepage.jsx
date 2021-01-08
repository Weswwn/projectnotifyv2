import React from 'react';


import headerImage from '../../core/assets/images/ubc-wide.jpg'

// styling
import './Homepage.scss';
import '../../App.scss';

// components
import { RegisterButton } from './components/Buttons/RegisterButton';


export const Homepage = () => {

    return (
        <div id='homepage-container'>
            <img style={{ width: '100%' }} src={headerImage}></img>

            <div className="homepage-content-container">

                <div className="homepage-information-container">
                    <div className="welcome-text-section-container">
                        <h1>Purpose</h1>
                        <div>
                            Welcome to UBC Course Tracker. The goal is simple. Help you
                            get into the course that you want FOR FREE. As Alumni, the team at ProjectNotify understand the pain
                            of manually refreshing the same course page over and over again. Using our website, we take care of this problem for you.
                        </div>
                    </div>
                    <div className="dev-updates-container">
                        <h1>Developer Updates</h1>
                        <div>
                            As of current, we only support American and Canadian phone numbers. Please do not include the +1 in your phone number
                            when filling out the form.
                        </div>
                    </div>
                </div>
                <RegisterButton />
            </div>
        </div>
    )
}