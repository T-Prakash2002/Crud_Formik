import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validateform } from "./validateform";
import Card from "./Card";


function DashBoard() {
  const [books, setBooks] = useState([]);

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios
      .get(`https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details`)
      .then((res) => setBooks(res.data));

  }, [books,selected]);

  const handleSelected = (id) => {
    const selectedItem = books.find((item) => item.id === id);

    setSelected(selectedItem);
  };

  const {values,handleChange,handleBlur,handleSubmit,errors}=useFormik({

    
  initialValues:{
    book_title: selected.book_title,
    book_ISBN:selected.book_ISBN,
    book_Pub_Date:selected.book_Pub_Date,
    book_imgURL:selected.book_imgURL,
    author_name:selected.author_name,
    author_dob:selected.author_dob,
    author_bio:selected.author_bio
  },
  
  validationSchema:validateform,
  onSubmit:(values)=>{

    console.log(values);
    axios.put(`https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details/${selected.id}`,values)
      .then((res)=>alert("Updated success"))
      .catch((err)=>alert("Updated Error"))

  }
})

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
                        
                        <form onSubmit={handleSubmit}>
                          <div className="book">
                            <h5>Book Details</h5>
                            <div className="mb-3">
                              <label htmlFor="book_title">Title</label>
                              <br />
                              <input
                                type="text"
                                name="book_title"
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.book_title && (
                                <small>{errors.book_title}</small>
                              )}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="book_ISBN">ISBN_NUMBER:</label>
                              <br />
                              <input
                                type="text"
                                name="book_ISBN"
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.book_ISBN && (
                                <small>{errors.book_ISBN}</small>
                              )}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="book_Pub_Date">
                                Publication Date
                              </label>
                              <br />
                              <input
                                type="text"
                                name="book_Pub_Date"
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.book_Pub_Date && (
                                <small>{errors.book_Pub_Date}</small>
                              )}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="book_imgURL">Image URL</label>
                              <br />
                              <input
                                type="text"
                                name="book_imgURL"
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.book_imgURL && (
                                <small>{errors.book_imgURL}</small>
                              )}
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
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.author_name && (
                                <small>{errors.author_name}</small>
                              )}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="author_dob">Author DOB</label>
                              <br />
                              <input
                                type="text"
                                name="author_dob"
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.author_dob && (
                                <small>{errors.author_dob}</small>
                              )}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="author_bio">Bio</label>
                              <br />
                              <input
                                type="text"
                                name="author_bio"
                                
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                              <br />
                              {errors.author_bio && (
                                <small>{errors.author_bio}</small>
                              )}
                            </div>
                          </div>

                          <div>
                            <button type="submit"
                            className="btn btn-outline-dark"
                            
                            >Submit</button>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        {/* <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Submit
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* /model */}

                <Card book={book} handleSelected={handleSelected}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
