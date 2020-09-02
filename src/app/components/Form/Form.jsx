import React, {useEffect, useState} from 'react';
import { Formik } from 'formik';
import {courseService} from '../../virtual-services/Courses/courses.service';

// styling
import './Form.scss';
import '../../App.scss';

// components
import { FormDescription } from './components/form-description/FormDescription';
import {Toaster} from './components/toaster-notification/Toaster';

export const Form = () => {
    const [registerResponse, setRegisterResponse] = useState({});
    console.log(registerResponse);
    return (
        <div id="form-parent-container">
            <FormDescription />
            <div className="form-content">
                <Formik 
                    initialValues={{subjectCode: '', subjectNumber: '', sectionNumber: '', user: ''}}
                    validate = {values => {
                        const errors = {};

                        return errors
                    }}
                    onSubmit= { async (values, { setSubmitting }) => {
                        const response = await courseService.postCourse(values)
                        setRegisterResponse(response);
                        Toaster.show(response);
                        setSubmitting(false)
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
                            <h3 className="form-title">Course Information</h3>
                                <div>
                                    <input
                                        className="input-fields"
                                        placeholder= "Subject Code"
                                        type="subjectCode"
                                        name="subjectCode"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subjectCode.toUpperCase().replace(/\s+/g, '')}
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
                                        value={values.subjectNumber.toUpperCase().replace(/\s+/g, '')}
                                        pattern="[a-zA-Z0-9]+"
                                        required
                                    />
                                    <input
                                        className="input-fields"
                                        placeholder= 'Section Number'
                                        type="sectionNumber"
                                        name="sectionNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sectionNumber.toUpperCase().replace(/\s+/g, '')}
                                        required
                                    />
                                    <div>

                                    <h3 className="form-title" style={{marginTop: '50px'}}>Phone Number</h3>
                                    <input
                                        className="input-fields"
                                        placeholder= 'Phone Number'
                                        // type="number"
                                        name="user"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.user}
                                        pattern="[0-9]"
                                        required
                                    />
                                </div>
                                    </div>
                                <button className="submit-button"type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}