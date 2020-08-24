import React from 'react';

import headerImage from '../../core/assets/images/ubc-wide.jpg'
// styling
import './Homepage.scss';
import '../../App.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

// components

export const Homepage = props => {
    return (
        <div id='homepage-container'>
            <img style={{width: '100%'}}src={headerImage}></img>

            <div className="homepage-content-container">

                <div className="homepage-information-container">
                    <div className="welcome-text-section-container">
                        <h1>Our Mission</h1>
                        <div>
                        Eos admodum propriae perpetua at, pro zril bonorum an, ea ius autem minim praesent. Vel cu munere accommodare, ad vim alia error deleniti. Ne elit deterruisset eam, mei ex persius fabellas. Habeo harum pri ea, fastidii partiendo at mea, aperiri dolorem percipit ne sea. Qui probo augue populo et, civibus delicatissimi eu nec. Aeque accommodare vix an, iudico senserit at per, soluta recusabo cu vel. Atqui putant mel id, per adhuc ancillae rationibus ne.
                        </div>
                    </div>
                    <div className="dev-updates-container">
                        <h1>Developer Updates</h1>
                        <div>
                            Move this to a separate isolated component
                        </div>
                    </div>
                </div>
                
                <div className="register-button-container">
                    <Link className="get-registered-button" to="/form">Click Here to Register</Link>
                </div>
            </div>
        </div>
    )
}