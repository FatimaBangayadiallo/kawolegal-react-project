import React from 'react';

const Recherche = () =>{
  return(
    <div className="container recherche-section">
     <div className="row">
       <div className="col-md-10">
         <form className="example" action="/action_page.php">
           <input
             type="text"
             placeholder="seach startup by name or industrie"
             name="search"
             className="entrer"
           />
         </form>
       </div>
       <div className="col-md-2">
         <div className="row">
           <div className="col-md-12">
             <button type="submit" className="bouttone">
               <i className="fa fa-search"></i> Search..
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>

  );
}
export default Recherche;
