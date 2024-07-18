import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password too short!")
    .required("Required"),
});

function Register() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h2 className="title">Signup</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          axios.post("https://api.huven.boogiecoin.com/register", values)
            .then(response => {
              setSubmitting(false);
              navigate("/login");
            })
            .catch(error => {
              setSubmitting(false);
              setErrors({ server: error.response.data.message });
            });
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="form">
            <div className="input-group">
              <label>
                <Field type="text" name="username" className="input" required />
                <span>Username</span>
              </label>
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="input-group">
              <label>
                <Field type="email" name="email" className="input" required />
                <span>Email</span>
              </label>
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="input-group">
              <label>
                <Field type="password" name="password" className="input" required />
                <span>Password</span>
              </label>
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            {errors.server && <div className="error">{errors.server}</div>}
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              Signup
            </button>
          </Form>
        )}
      </Formik>
      <div className="signin">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Register;
