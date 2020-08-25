import React from 'react';

import { useHistory } from "react-router-dom";

import './RegisterButton.scss';

export const RegisterButton = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/form');
    }
    return (
        <button className="get-registered-button" type='button' onClick={handleClick}>Register Button</button>
    )
}