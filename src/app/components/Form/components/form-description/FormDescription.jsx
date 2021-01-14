import React from 'react';

// Styling
import './FormDescription.scss';

// Images
import studentImg from '../../../../core/assets/images/description-images/student.png';
import hackerImg from '../..//../../core/assets/images/description-images/hacker.png';
import textMessage from '../../../../core/assets/images/description-images/text-message.png';

export const FormDescription = () => {
    return (
        <div id="form-description-container">
            <h2 className="fadein tw-text-white tw-text-4xl">How Does This Work?</h2>
            <div className="description-content">
                {/* <img style={{ height: '50px', width: '50px' }} src={studentImg}></img> */}
                <div className="description-text  fadeInUp"><b>YOU</b> provide the course information and your phone number.
                </div>
            </div>
            <div className="description-content">
                {/* <img style={{ height: '50px', width: '50px' }} src={hackerImg}></img> */}
                <div className="description-text fadeInUp" ><b>WE</b> continuously track the course for you until a spot opens up
                </div>
            </div>
            <div className="description-content">
                {/* <img style={{ height: '50px', width: '50px' }} src={textMessage}></img> */}
                <div className="description-text fadeInUp" ><b>YOU</b> will receive a text message with a direct URL to the course as soon as a spot is available. After a notification is sent,
                your phone number will be taken off of the list. <br></br><br></br><b>To re-register, re-enter your information into the form.</b>
                </div>
            </div>
        </div>
    )
}
