import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../Static/Header'
import Footer from '../Static/Footer';

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Homelayout