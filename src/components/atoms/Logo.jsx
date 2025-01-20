import React, { useState, useEffect } from 'react'
import image1 from '../../assets/logo.png'
import image2 from '../../assets/logo_white.png'

const Logo = ({ variant = 'default' }) => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (variant === 'light') {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [variant]); 

  return (
    <img src={light? image2: image1} alt="Resultify Logo" /> 
  );
};

export default Logo