import React from "react";
import  {Outlet,Link }  from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="page">

    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link " aria-current="page" to="./home">
                  Home
                </Link>
                <Link className="nav-link" to="/dashboard">
                  DashBoard
                </Link>
                <Link className="nav-link" to="./create">
                  Create
                </Link>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="row mt-5 mb-5">
        <Outlet />
      </div>

      <div className="row mt-3 fixed-bottom">
          <nav className="navbar navbar-dark bg-dark ">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">&copy;Copyright</span>
            <span className="ms-auto text-white">
              @2024
            </span>
          </div>
        </nav>
      </div>
    </div>
    
    </div>
  );
}

export default App;
