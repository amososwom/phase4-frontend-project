import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from './UseFetch';


function PropertyPosting() {
  const { data, loading, error, fetchData } = useFetch();

  
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
      price: "",
      imageurl: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      location: Yup.string().required("Location is required"),
      price: Yup.number().required("Price is required"),
      imageurl: Yup.string().url("Invalid URL").required("Image URL is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {

    const { result, error } = await fetchData("https://api.huven.boogiecoin.com/properties", 'POST', true, values);
        if (error) {
        alert("Error posting property");
      } else {
        alert(result.title)
        resetForm()
      }
    },
  });

  return (
    <div className="form-container">
      <h2 className="title">Post a Property</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <label>
            <input
              type="text"
              className="input"
              {...formik.getFieldProps("title")}
            />
            <span>Title</span>
          </label>
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label>
            <textarea
              className="input"
              {...formik.getFieldProps("description")}
            ></textarea>
            <span>Description</span>
          </label>
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label>
            <input
              type="text"
              className="input"
              {...formik.getFieldProps("location")}
              />
            <span>Location</span>
          </label>
          {formik.touched.location && formik.errors.location ? (
            <div className="error">{formik.errors.location}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label>
            <input
              type="number"
              className="input"
              {...formik.getFieldProps("price")}
            />
            <span>Price</span>
          </label>
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>
        <div className="input-group">
          <label>
            <input
              type="text"
              className="input"
              {...formik.getFieldProps("imageurl")}
            />
            <span>Image URL</span>
          </label>
          {formik.touched.imageurl && formik.errors.imageurl ? (
            <div className="error">{formik.errors.imageurl}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={formik.isSubmitting}
        >
          Post Property
        </button>
      </form>
    </div>
  );
}

export default PropertyPosting;