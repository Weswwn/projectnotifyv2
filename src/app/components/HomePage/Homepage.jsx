import React, { useEffect, useState } from 'react';


import backgroundImage from '../../core/assets/images/backgroundImage.jpg';

// styling
import './Homepage.scss';
import '../../App.scss';

// components
import { RegisterButton } from './components/Buttons/RegisterButton';

// services
import { courseService } from '../../virtual-services/Courses/courses.service';

export const Homepage = () => {
    const [activeCoursesCount, setActiveCoursesCount] = useState(0);

    useEffect(() => {
        courseService.getActiveUserCourseCount()
            .then(res => {
                if (res?.data) {
                    setActiveCoursesCount(res.data);
                }
            })
            .catch(err => {
                setActiveCoursesCount('N/A. Maintenance In Progress')
            })
    }, [])

    return (
        <div className="tw-pt-32" id='homepage-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="homepage-info-parent tw-mt-64">
                <div className="homepage-purpose-section tw-ml-16">
                    <h2 className="homepage-purpose-title fadein tw-text-white tw-text-4xl">Get Into the Course You Need.</h2>
                    <div className="homepage-purpose-text fadeInUp tw-mt-4">
                        When a course is full track the course with us and receive a SMS text message when a General Seat opens up! <br></br>
                        <b>No</b> account registration necessary. <br></br>
                        <b>No</b> fees.
                        Yup. Completely Free.
                    </div>
                </div>
                <div className="homepage-dev-updates-section">
                    <h2 className="homepage-dev-updates-title tw-text-black fadein tw-text-4xl">Service Updates</h2>
                    <div className="homepage-dev-updates-text fadeInUp tw-mt-4">
                        As of current, we only support American and Canadian phone numbers. Please do not include the +1 in your phone number when filling out the form.
                    </div>
                    <h2 className="homepage-stats tw-text-black fadeInUp tw-text-1xl tw-mt-8">Actively Tracking: <span className="tw-text-2xl tw-text-red-800">{activeCoursesCount}</span> course(s)</h2>
                    {/* <h2 className="homepage-stats tw-text-black fadeInUp tw-text-1xl">Total Notifications Sent: <span className="tw-text-red-800 tw-text-2xl">10</span></h2> */}
                </div>
            </div>
            <RegisterButton />
            <div className="tw-absolute tw-bottom-0 tw-mb-4 tw-ml-4 tw-text-gray-400">
                Have questions? <a className="footer-url" href="https://www.instagram.com/weswwn" target="_blank">Hit me up directly.</a>
            </div>
        </div >
    )
}