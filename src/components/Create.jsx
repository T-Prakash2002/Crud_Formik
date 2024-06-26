import { useFormik } from "formik";
import React from "react";
import { validateform } from "./validateform";
import axios from "axios";

function Create() {
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues: {
      book_title: "",
      book_ISBN: "",
      book_Pub_Date: "",
      book_imgURL: "",
      author_name: "",
      author_dob: "",
      author_bio: "",
    },
    validationSchema: validateform,
    onSubmit: (values) => {
      axios
        .post(`https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details`, {
          ...values,
        })
        .then((res) => alert("Added"))
        .catch((err) => alert("Added Error"));
    },
  });

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="bg-success-subtle z-2 shadow p-5 w-50 rounded">

        <h2 className="text-center">Form</h2>
        <hr />
        <div className="book">
          <h5>Book Details</h5>
          <div className="mb-3">
            <label htmlFor="book_title">Title</label>
            <br />
            <input
              type="text"
              name="book_title"
              className="form-control"
              value={values.book_title}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            {errors.book_title && <small>{errors.book_title}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="book_ISBN">ISBN_NUMBER:</label>
            <br />
            <input
              type="number"
              name="book_ISBN"
              value={values.book_ISBN}
              className="form-control"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            {errors.book_ISBN && <small>{errors.book_ISBN}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="book_Pub_Date">Publication Date</label>
            <br />
            <input
              type="date"
              name="book_Pub_Date"
              value={values.book_Pub_Date}
              className="form-control"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            {errors.book_Pub_Date && <small>{errors.book_Pub_Date}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="book_imgURL">Image URL</label>
            <br />
            <input
              type="url"
              name="book_imgURL"
              value={values.book_imgURL}
              onBlur={handleBlur}
              className="form-control"
              onChange={handleChange}
            />
            <br />
            {errors.book_imgURL && <small>{errors.book_imgURL}</small>}
          </div>
        </div>
        <div className="author">
          <h5>Author details</h5>

          <div className="mb-3">
            <label htmlFor="author_name">Name</label>
            <br />
            <input
              type="text"
              name="author_name"
              value={values.author_name}
              onBlur={handleBlur}
              className="form-control"
              onChange={handleChange}
            />
            <br />
            {errors.author_name && <small>{errors.author_name}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="author_dob">Author DOB</label>
            <br />
            <input
              type="date"
              name="author_dob"
              value={values.author_dob}
              className="form-control"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            {errors.author_dob && <small>{errors.author_dob}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="author_bio">Bio</label>
            <br />
            <input
              type="text"
              name="author_bio"
              value={values.author_bio}
              className="form-control"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            {errors.author_bio && <small>{errors.author_bio}</small>}
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-dark form-control">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
