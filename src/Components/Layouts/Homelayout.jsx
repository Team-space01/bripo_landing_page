import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../Static/Header'
import Footer from '../Static/Footer';
import StartingPage from '../../Pages/LandingPage/StartingPage';

const Homelayout = () => {
  return (
    <div>
      
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Homelayout