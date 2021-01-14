import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';

//services
import { courseService } from '../../virtual-services/Courses/courses.service';

// styling
import './Form.scss';
import '../../App.scss';

// components
import { FormDescription } from './components/form-description/FormDescription';
import { Toaster } from './components/toaster-notification/Toaster';
import { MainHeader } from '../Header/Mainheader';

export const Form = () => {
    const [registerResponse, setRegisterResponse] = useState({});
    console.log(registerResponse);

    return (
        <div id="form-parent-container">
            <MainHeader />
            <div className="form-description-section">
                <div className="form-description-background tw-bg-black tw-pt-32">
                    <FormDescription />
                </div>
            </div>
            <div className="form-content tw-pt-48 tw-pl-8">
                <Formik
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues={{ subjectCode: '', subjectNumber: '', sectionNumber: '', user: '' }}
                    validate={values => {
                        console.log('validate check:', values.user);
                        const errors = {};

                        return errors
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);
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
                                <h3 className="form-title fadein tw-text-4xl">Course Information</h3>
                                <div className="fadeInUp">
                                    <input
                                        className="input-fields"
                                        placeholder="Subject Code"
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
                                        placeholder="Subject Number"
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
                                        placeholder='Section Number'
                                        type="sectionNumber"
                                        name="sectionNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sectionNumber.toUpperCase().replace(/\s+/g, '')}
                                        required
                                    />
                                    <div className="tw-mt-8">

                                        <h3 className="form-title fadein tw-text-4xl" style={{ marginTop: '50px' }}>Phone Number</h3>
                                        <h4 className="tw-ml-4" style={{
                                            fontSize: '12px', color: 'black'
                                        }}>At this time, we only accept Canadian and American numbers</h4>
                                        <span>+1</span>
                                        < input
                                            className="input-fields"
                                            placeholder='Phone Number'
                                            type="tel"
                                            name="user"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.user}
                                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                            required
                                        />
                                        {errors.user}
                                    </div>
                                </div>
                                <button className="submit-button fadeInLeft tw-mt-8 tw-text-3xl" type="submit" disabled={isSubmitting}>
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