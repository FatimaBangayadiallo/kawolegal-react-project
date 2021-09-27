import React from 'react';
import Log from './ContentLogin.jsx';
import SectionLog from './Log2.jsx';
import FootLog from './FootLog.jsx';

 class Login extends React.Component {
  render(){
    return(
      <div>
        <Log />
        <SectionLog />
        <FootLog />
      </div>
    );
  }
};
export default Login ;
