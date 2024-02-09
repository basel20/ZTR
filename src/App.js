import React, { useState, useEffect } from 'react';
import Footer from "./layout/Footer";
import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import Home from "./pages/home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contacts/ConntactsPage";
import { Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Hotels from "./pages/Hotels/Hotels";
import "./App.css";
import Navbar from "./layout/NavBar";
import Resturants from "./pages/Resturants/resturants";
import Details from "./components/Details";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import WhatsAppIconButton from "./components/WhatsAppIcon";
import Activities from "./pages/Activities/Activities";
import ActivityDetails from "./pages/ActivityDetails/ActivityDetails";
import CategoriesPage from "./pages/Categories/Categories";
import ResturantsDetails from './pages/ResturantsDetails/ResturantsDetails';
import Logo from './logo.svg'

import { Box, Container } from '@mui/material';
// import 

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading? (<Container sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Box
        disableRipple
        href="/"
        sx={{
          height: {xs:"20%", md:'30%'},
          width: {xs:"100%", md:'50%'},
          background: `url(${Logo})`,
          backgroundSize: "100% 100%",
        }}
      ></Box>
      </Container>): (<ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/resturants" element={<Resturants />} />
          <Route path="/resturants/:id" element={<ResturantsDetails />} />
          <Route path="/Contacts" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        {/* </Layout> */}
        <WhatsAppIconButton />
        <Footer />
      </ThemeProvider>)}

    </div>
  );
}

export default App;
