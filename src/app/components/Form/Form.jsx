import React, {useEffect, useState} from 'react';
import { Formik } from 'formik';
import {courseService} from '../../virtual-services/Courses/courses.service';

// styling
import './Form.scss';

export const Form = () => {
    const [registerResponse, setRegisterResponse] = useState('');

    return (
        <div id="form-container">
            <h2>Register to be notified when the course you want has a spot available!</h2>
            <Formik 
                initialValues={{subjectCode: '', subjectNumber: '', sectionNumber: '', user: ''}}
                validate = {values => {
                    const errors = {};

                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    courseService.postCourse(values)
                        .then(res => {
                            setSubmitting(false);
                            setRegisterResponse(res.status)
                        })
                        .catch(err => {
                            setSubmitting(false);
                            setRegisterResponse(err.status)
                        })
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div className='input-field-container'>
                        <form onSubmit={handleSubmit}>
                        <div>Please Enter the Course That You Want To Be Notified For</div>
                            <div>
                                <input
                                    className="input-fields"
                                    placeholder= "Subject Code"
                                    type="subjectCode"
                                    name="subjectCode"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subjectCode}
                                    pattern="[A-Za-z]{3,4}"
                                    required
                                />
                                <input
                                    className="input-fields"                
                                    placeholder= "Subject Number"
                                    type="subjectNumber"
                                    name="subjectNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subjectNumber}
                                    pattern="[A-Za-Z0-9]{3,4}"
                                    required
                                />
                                <input
                                    className="input-fields"
                                    placeholder= 'Section Number'
                                    type="sectionNumber"
                                    name="sectionNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sectionNumber}
                                    required
                                />
                                <div>

                                <div>Please Enter the Phone Number You Would Like to Receive the Notification With</div>
                                <input
                                    className="input-fields"
                                    placeholder= 'Phone Number'
                                    type="user"
                                    name="user"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.user}
                                    required
                                />
                            </div>
                                </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            <div>{registerResponse}</div>
                        </form>
                    </div>
                )}
                </Formik>
        </div>
    )
}