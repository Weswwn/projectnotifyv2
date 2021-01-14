import React from 'react';
import './Header.scss';

export const MainHeader = () => {
    return (
        <header className="header tw-absolute tw-text-4xl tw-ml-8 tw-mt-8">
            <div className="header-line tw-border-b-4"></div>
            <h1 className="tw-mt-4 tw-mb-4 tw-ml-8 tw-text-white">UBC COURSE TRACKER</h1>
            <div className="header-line tw-border-b-4 tw-ml-64"></div>
        </header>
    )
}