import React from 'react';


const SectionLog = () =>{
  return(
   <>
   <div className="container contenaire-de-registration">
    <div className="row">
      <div className="col-md-12">
        <h3>Already a Member? Login to Add your Startup</h3>
      </div>
    </div>
    <div className="row form-ligne">
      <div className="col-md-12">
        <form action="">

          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">sign up</button>
        </form>
      </div>
    </div>
  </div>


   </>

  );
}
export default SectionLog;
