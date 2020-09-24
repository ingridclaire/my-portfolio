// import React, { useState, useEffect } from 'react';
// import {Link } from 'react-router-dom';
// import './App.css';
// import Dropdown from "./Dropdown";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { dom } from '@fortawesome/fontawesome-svg-core';



// const Header = () => {

//   const [showModal, setShowModal ] = useState(false);
//   const renderModal = () => {
//     console.log('button clicked')
//     if(showModal) {
//       return <Dropdown />
//     }
//     return null;
//   }

//   return <div>
//     <div className="header-container">
//       <img className="header-logo" src="https://s3-us-west-1.amazonaws.com/icc.portfolio/logo-name.png" alt="site-logo" />
//       <div id="header-dropdown">
//        <Link to="/portfolio">Portfolio</Link>
//       </div>
//     </div>
//     {renderModal()}
//   </div>
// }

// export default Header;