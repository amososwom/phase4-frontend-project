import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useFetch from './UseFetch';
import "./Login.css";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const { data, loading, error, fetchData } = useFetch();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { result, error } = await fetchData("http://localhost:5000/login", 'POST', false, values);
    if (error) {
      console.error('Error:', error);
    } else {
      alert(`Logged in with ${result.access_token}`);
      localStorage.setItem('access_token', result.access_token);
    }
    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <div className="title">Login</div>
      <Formik
        initialValues={{ username: "manu", password: "manu12345" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting || loading}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className="signin">
        Don't have an account? <a href="/register">Sign up</a>
      </div>
    </div>
  );
}

export default Login;
