import React, { useState } from "react";
import "./Navbar.css";
import { GiFishEscape } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
   

    
    <nav className=" container-fluid navbar" style={{background:'#0a1930'}}>
      <div className="logo" style={{marginLeft:'20px'}}>
        <GiFishEscape color="#fff" size={45} />
        <p className="logo-text">
          <span>K</span>aradiya
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#faq">FAQS</a>
          </li>
          <li className="">
            <Link to="/login" className="btn btn-dark">
              LOGIN
            </Link>
          </li>
          <li className="nav-btn" style={{marginRight:"20px"}}>
            <Link to="/signup" className="btn btn-dark">
              SIGN UP
            </Link>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
    
  );
};

export default Navbar;
