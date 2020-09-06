import React from 'react';

// styling
import './Footer.scss';

// images
import mailIcon from '../../core/assets/images/footer/mail.png';
import instaIcon from '../../core/assets/images/footer/instagram.png';


export const MainFooter = () => {
    return (
        <footer className="main-footer">
             <div className="description-content">
                <img style={{height: '25px', width:'35px'}} src={mailIcon}></img>
                <div className="description-text">Ask us questions or for support: ubcprojectnotify@gmail.com</div>
            </div>
            <div className="description-content">
                <img style={{height: '35px', width:'35px'}} src={instaIcon}></img>
                <a className="description-text" href="https://www.instagram.com/weswwn" target="_blank">Connect With Me</a>
            </div>
        </footer>
    )
}