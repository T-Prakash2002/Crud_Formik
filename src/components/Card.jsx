import React from 'react'

function Card({book,handleSelected}) {
  return (
    
     <div
                  className="card mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    handleSelected(book.id);
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={book.book_imgURL}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          Book Name: {book.book_title}
                        </h5>
                        <p className="card-text">
                          <strong>Author:</strong>
                          {book.author_name}
                        </p>
                        <p className="card-text">
                          <strong>ISBN:</strong>
                          {book.book_ISBN}
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            <strong>Publication Number:</strong>
                            {book.book_Pub_Date}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default Card