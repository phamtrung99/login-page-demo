import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, FastField, } from 'formik';

const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string().min(6, "Too short").required('required'),

})

const initialValues = {
    email: '',
    password: '',
}

const LoginForm: React.FC = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values) => {
                console.log("🚀 ~ file: index.tsx ~ line 24 ~ values", values)
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor='email'>Email</label>
                    <FastField name='email' placeholder='abc@gmail.com' />
                    {touched.email && errors.email && (
                        <div>{errors.email}</div>
                    )}

                    <label htmlFor='password'>Password</label>
                    <FastField name='password' placeholder='password' />
                    <button type="submit" >Login </button>
                    {touched.password && errors.password && (
                        <div>{errors.password}</div>
                    )}

                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;
