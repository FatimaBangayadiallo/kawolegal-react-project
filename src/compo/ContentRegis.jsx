import React from 'react';
import {Link} from 'react-router-dom';

const RegisContent =() =>{
  return(
    <>
    <div className="nvg">
      <div className="overlay-start">
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
                          <Link className="nav-link a-link " to="/">
                      Home
                      <span className="sr-only">(current)</span>
                  </Link>

                      </li>
                      <li className="nav-item ">
                          <Link className="nav-link a-link" to="/startups">Startups</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link a-link regis-table-hover" to="/">Register</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link a-link" to="/login">Login</Link>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  </div>
  
  <div className="container contenaire-de-registration">
        <div className="row">
            <div className="col-md-12">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odit!</h3>
            </div>
        </div>
        <div className="row form-ligne">
            <div className="col-md-12 ">
                <form action="">
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Fatima"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlInput1">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput3" placeholder="password"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlInput1">Comfirm password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput4" placeholder="comfirme password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">sign up</button>
                </form>
            </div>
        </div>
    </div>


    </>
  );
}
export default RegisContent;
