import React from 'react';
import NavBarStartup from './NavBarStp.jsx';
import Recherche from './Recherche.jsx';
import Content from './ContentStp.jsx';


 class Startup extends React.Component {
  render(){
    return(
      <div>
         <NavBarStartup />
         <Recherche />
         <Content />
      </div>
    );
  }
};
export default Startup ;
