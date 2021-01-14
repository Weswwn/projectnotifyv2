import React from 'react';

import { useHistory } from "react-router-dom";

import './RegisterButton.scss';

export const RegisterButton = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/form');
    }
    return (
        <div className="homepage-button-container tw-ml-16 tw-mt-8 fadeInLeft">
            <button className="get-registered-button" type='button' onClick={handleClick}>TRACK NOW</button>
        </div>
    )
}