import React, { useEffect, useState } from 'react';

// components
import { Updates } from './components/Updates';
import { TotalStats } from './components/TotalStats';
// import { TwitterWidget } from '@atoms/Twitter';

export function Info() {

    return (
        <div id="info" className='tw-flex tw-h-full tw-bg-red-400 tw-bg-opacity-90 tw-p-32 tw-pt-16'>
            <div className='tw-flex tw-flex-col tw-flex-1 tw-items-center'>
                <div className='tw-flex tw-justify-center tw-w-full tw-text-4xl tw-text-white'>ADDITIONAL INFO</div>
                <div className='tw-flex tw-w-full tw-justify-center tw-m-16 tw-gap-5'>
                    <Updates />
                    <TotalStats />
                </div>
            </div>
        </div>
    )
}