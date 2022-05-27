import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from './../UI/Grid';

const Analytcs = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <Grid/>
  )
}

export default Analytcs