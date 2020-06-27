import React, {useEffect, useState} from 'react';
import { Formik } from 'formik';

export const Form = () => {
    return (
        <div id="form-container">
            <Formik 
                initialValues={{subjectCode: '', subjectNumber: '', sectionNumber: ''}}
                validate = {values => {
                    const errors = {};
                    if (!values.subjectCode || !values.subjectNumber || !values.sectionNumber) {
                        errors.general = 'Please fill in required details!'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
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
                    <form onSubmit={handleSubmit}>
                    <input
                        type="subjectCode"
                        name="subjectCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subjectCode}
                    />
                    {errors.general && touched.subjectCode && errors.general}
                    <input
                        type="subjectNumber"
                        name="subjectNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subjectNumber}
                    />
                    {errors.subjectNumber && touched.subjectNumber && errors.subjectNumber}
                    <input
                        type="sectionNumber"
                        name="sectionNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sectionNumber}
                    />
                    {errors.sectionNumber && touched.sectionNumber && errors.sectionNumber}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </form>
                )}
                </Formik>
        </div>
    )
}