import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignIn.css';

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  });

  const handleSignIn = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(`Signed in as: ${JSON.stringify(values, null, 2)}`);
      setSubmitting(false);
      setIsLoggedIn(true);
    }, 400);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignIn}
          >
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit">Sign In</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default SignIn;
