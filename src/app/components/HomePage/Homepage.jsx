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
                <RegisterButton />
            </div>
        </div>
    )
}