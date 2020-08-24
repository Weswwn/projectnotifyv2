import React from 'react';
import './Header.scss';

export const MainHeader = () => {
    return (
        <header className="header">
            <h1 style={{marginBottom: '0px'}}>UBC Course Tracker</h1>
            <h2 style={{marginTop: '0px', fontSize:'17px'}}>Register to be notified when the course you want has a spot available!</h2>
        </header>
    )
}