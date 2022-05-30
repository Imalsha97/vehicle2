import React from 'react';
import './Feature.css';
import { BsHexagon } from "react-icons/bs";
import { GiArchiveRegister } from "react-icons/gi";



const Feature = ({icon,heading,text}) => {
  return (
    <div className='feature'>
      <div className="feature-icon">
        <BsHexagon color="aqua" size={55}/>
        <div className="inner-icon">
         {icon}
        </div>
      </div>
      <div className="feature-text ml-5">
        <h3>{heading}</h3>
        <p className="u-text-small" style={{fontSize:"15px"}}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature