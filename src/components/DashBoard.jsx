import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import Card from "./Card";
import * as Yup from "yup";
import { validateform } from "./validateform";




function DashBoard() {
  const [books, setBooks] = useState([]);

  const [bookTitle, setBookTitle] = useState("");
  const [bookISBN, setBookISBN] = useState("");
  const [bookPub_Date, setBookPubDate] = useState("");
  const [bookImgURL, setbookImgURL] = useState("");
  const [authorName, setauthorName] = useState("");
  const [authorDOB, setauthorDOB] = useState("");
  const [authorBIO, setauthorBIO] = useState("");

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios
      .get(`https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details`)
      .then((res) => {
        setBooks(res.data)
        console.log(res.data)
        });

      setBookTitle(bookTitle)
      setBookISBN(bookISBN)
      setBookPubDate(bookPub_Date)
      setbookImgURL(bookImgURL)
      setauthorName(authorName)
      setauthorDOB(authorDOB)
      setauthorBIO(authorBIO)
  }, []);

  const handleSelected = (id) => {
    const selectedItem = books.find((item) => item.id === id);

    setSelected(selectedItem);

    setBookTitle(selectedItem.book_title);
    setBookISBN(selectedItem.book_ISBN);
    setBookPubDate(selectedItem.book_Pub_Date);
    setbookImgURL(selectedItem.book_imgURL);
    setauthorName(selectedItem.author_name);
    setauthorDOB(selectedItem.author_dob);
    setauthorBIO(selectedItem.author_bio);
  };

  //   const { values, handleBlur, handleSubmit, errors } = useFormik({
  //     initialValues: {
  //       book_title: "",
  //       book_ISBN: "",
  //       book_Pub_Date: "",
  //       book_imgURL: "",
  //       author_name: "",
  //       author_dob: "",
  //       author_bio: "",
  //     },
  //
  //     validationSchema: Yup.object({
  //
  //       book_title: Yup.string().min(2).required("Please Enter name"),
  //       book_ISBN: Yup.string().min(2).required("Please Enter ISBN"),
  //       book_Pub_Date: Yup.string().min(2).required("Please Select DoB"),
  //       book_imgURL: Yup.string().min(2).required("Please Enter Url"),
  //       author_name: Yup.string().min(2).required("Please Enter Author name"),
  //       author_dob: Yup.string().min(2).required("Please Enter Author DoB"),
  //       author_bio: Yup.string().min(2).required("Please Enter Author Bio"),
  //     }),
  //     onSubmit: (values) => {
  //       console.log(values);
  //       axios
  //         .put(
  //           `https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details/${selected.id}`,
  //           values
  //         )
  //         .then((res) => alert("Updated success"))
  //         .catch((err) => alert("Updated Error"));
  //     },
  //   });

  const deleteBook = (id) => {
    axios
      .delete(
        `https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details/${id}`
      )
      .then((res) => alert("Deleted success"))
      .catch((err) => alert("deleted Error"));
  };

  const UpdateBook = (e,id) => {
    
    e.preventDefault();
    const item = {

      book_title: e.target.elements[0].value,
      book_ISBN: e.target.elements[1].value,
      book_Pub_Date: e.target.elements[2].value,
      book_imgURL:e.target.elements[3].value,
      author_name:e.target.elements[4].value,
      author_dob: e.target.elements[5].value,
      author_bio: e.target.elements[6].value,
    
    };
     axios
          .put(
            `https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details/${id}`,
            item
          )
          .then((res)=>alert("Updated Successfully"))
          .catch((err)=>alert("Error"))
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {books.map((book) => {
            return (
              <div
                className="col-12 col-sm-4"
                key={book.id}
                style={{ width: "22rem" }}
              >
                {/* Model */}

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Update Details
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">

                        <Formik
                          initialValues={{
                            book_title: "1234",
                            book_ISBN: bookISBN,
                            book_Pub_Date: "",
                            book_imgURL: "",
                            author_name: "",
                            author_dob: "",
                            author_bio: "",
                          }}

                          

                          validationSchema={validateform}
  
                        >
                          <Form onSubmit={(e)=>UpdateBook(e,book.id)}>
                            <div className="book">
                              <h5>Book Details</h5>
                              <div className="mb-3">
                                <label htmlFor="book_title">Title</label>
                                <br />
                                <Field
                                  type="text"
                                  name="book_title"
                                  value={bookTitle}
                                  onChange={(e) => {
                                    setBookTitle(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="book_title"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="book_ISBN">ISBN_NUMBER:</label>
                                <br />
                                <Field
                                  type="number"
                                  name="book_ISBN"
                                  value={bookISBN}
                                  onChange={(e) => {
                                    setBookISBN(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="book_ISBN"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="book_Pub_Date">
                                  Publication Date
                                </label>
                                <br />
                                <Field
                                  type="date"
                                  name="book_Pub_Date"
                                  value={bookPub_Date}
                                  onChange={(e) => {
                                    setBookPubDate(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="book_Pub_Date"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="book_imgURL">Image URL</label>
                                <br />
                                <Field
                                  type="url"
                                  name="book_imgURL"
                                  value={bookImgURL}
                                  onChange={(e) => {
                                    setbookImgURL(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="book_imgURL"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </div>
                            <div className="author">
                              <h5>Author details</h5>

                              <div className="mb-3">
                                <label htmlFor="author_name">Name</label>
                                <br />
                                <Field
                                  type="text"
                                  name="author_name"
                                  value={authorName}
                                  onChange={(e) => {
                                    setauthorName(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="author_name"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="author_dob">Author DOB</label>
                                <br />
                                <Field
                                  type="date"
                                  name="author_dob"
                                  value={authorDOB}
                                  onChange={(e) => {
                                    setauthorDOB(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="author_dob"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="author_bio">Bio</label>
                                <br />
                                <Field
                                  type="text"
                                  name="author_bio"
                                  value={authorBIO}
                                  onChange={(e) => {
                                    setauthorBIO(e.target.value);
                                  }}
                                />
                                <ErrorMessage
                                  name="author_bio"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                  deleteBook(selected.id);
                                }}
                              >
                                Delete
                              </button>
                              <button type="submit" className="btn btn-primary"
                              
                              >
                                Submit
                              </button>
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>

                {/* /model */}

                <Card book={book} handleSelected={handleSelected} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
