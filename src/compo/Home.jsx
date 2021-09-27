import React from 'react';
import Nav from './NavHome.jsx';
import TopHeader from './TopHead.jsx';
import Footer from './FooterHome.jsx';

 class Home extends React.Component {
  render(){
    return(
      <div>
        <Nav />
        <TopHeader />
        <Footer />
      </div>
    );
  }
};
export default Home;
