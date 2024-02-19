import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []); 
  return (
    <div className='footer mt-4 pb-3 mx-3'>
      <div className='col-lg-12 text-center'>
        <h6 className='mb-0 mt-2'>Copyright © {currentYear} <Link to="/">RakSofTech.</Link></h6>
      </div>  
    </div>
  );
}

export default Footer;
