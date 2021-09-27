import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigation-bare">
        <a className="navbar-brand" href="#">
            <img src="images/nav-logo.png" className="d-inline-block align-top nav-image" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto listes-links">
                <li className="nav-item active">
                    <Link className="nav-link a-link link-table-hover " to="/">Home

                        <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link a-link" to="/startups">Startups</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link a-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link a-link" to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>

  );
};
export default Nav;
