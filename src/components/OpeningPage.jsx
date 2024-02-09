import React, { useState, useEffect } from 'react';

import { CircularProgress, Container, ButtonBase } from '@mui/material';

import Logo from './masar.jpg'



const OpeningPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ButtonBase
        disableRipple
        href="/"
        sx={{
          height: "50%",
          width: "500px",
          background: `url(${Logo})`,
          backgroundSize: "100% 100%",
          border: "none",
          borderRadius: 0,
          color:'#005A5A',
          fontSize:'40px',
          filter:"brightness(100%)"
        }}
      ></ButtonBase>
      )}
    </Container>
  );
};

export default OpeningPage;
