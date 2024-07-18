import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useFetch from './UseFetch';
import "./Login.css";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Password is required"),
});

function Login({ setLoggedIn, setUserDetails }) {
  const { data, loading, error, fetchData } = useFetch();
  let directaccount = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {

    const { result, error } = await fetchData("https://api.huven.boogiecoin.com/login", 'POST', false, values);
 
    if(error){
      alert('Opps, Invalid Credentials')
      setSubmitting(false);
      return;
    }
    (result.current_user)
    setUserDetails(result.current_user)
    localStorage.setItem('access_token', result.access_token);
    setLoggedIn(true)
    directaccount('/account')
  };
  
  return (
    <div className="form-container">
      <div className="title">Login</div>
      <Formik
        initialValues={{ username: "", password: "" }}
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
