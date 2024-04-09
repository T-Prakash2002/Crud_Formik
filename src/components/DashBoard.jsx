import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DashBoard() {


  const [books,setBooks]=useState([])


  useEffect(()=>{

      axios.get(`https://66129f4a53b0d5d80f6607c9.mockapi.io/api/v1/details`)
      .then((res)=>setBooks(res.data));

      ;
  },[])


  return (


    <div>

      <div className="container-fluid">


        <div className="row">
          { 
            books.map((book)=>{
              return(
                <div className="col-12 col-sm-4"
                key={book.id} style={{width:"22rem"}}>

                  <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={book.image} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Book Name: {book.title}</h5>
                      <p className="card-text">
                        <strong>Author:</strong>{book.author}
                      </p>
                      <p className="card-text">
                        <strong>ISBN:</strong>{book.ISBN_Number}
                      </p>
                      <p className="card-text"><small className="text-body-secondary">
                        <strong>Publication Number:</strong>{book.Publication_Date}</small></p>
                    </div>
                  </div>
                </div>
              </div>

                </div>
              )
            })
          }
        </div>
      </div>


    </div>
  )
}

export default DashBoard