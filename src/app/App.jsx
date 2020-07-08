import React from 'react';

// styling
import './App.scss';

// components
import { Form } from './components/Form/Form';

export const App = () => {
    return (
        <div id='app-container'>
            <header className="app-header">
                <h1>UBC Project Notify</h1>
            </header>
            <Form />
        </div>
    )
}