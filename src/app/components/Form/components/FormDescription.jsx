import React from 'react';

// Styling
import './FormDescription.scss';

// Images
import studentImg from '../../../core/assets/images/description-images/student.png';
import hackerImg from '../../../core/assets/images/description-images/hacker.png';
import textMessage from '../../../core/assets/images/description-images/text-message.png';

export const FormDescription = () => {
    return (
        <div id="form-description-container">
                <h2>How Does This Work?</h2>
            <div className="description-content">
                <img style={{height: '50px', width:'50px'}}src={studentImg}></img>
                <div className="description-text">YOU provide the course information and your phone number. 
                </div>
            </div>
            <div className="description-content">
                <img style={{height: '50px', width:'50px'}}src={hackerImg}></img>
                <div className="description-text" >WE continuously track the course for you until a spot opens up 
                </div>
            </div>
            <div className="description-content">
                <img style={{height: '50px', width:'50px'}}src={textMessage}></img>
                <div className="description-text" >A SMS text message gets sent to you as soon as 
                we detect that a spot has opened up with a direct URL to the course
                </div>
            </div>
        </div>
    )
}
