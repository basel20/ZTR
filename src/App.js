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
import Places from './pages/Places/Places';
import PlaceDetails from './pages/PlacesDetails/PlacesDetails';
import { Box, Container } from '@mui/material';
import ScrollToTop from './utils/ScrollToTop';
import Slider2 from './components/Slider2/Slider2';
import Molls from './pages/Molls/Molls';
import MollDetails from './pages/MollsDetails/MollDetails';
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
        <ScrollToTop>
        <Navbar/>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/slider" element={<Slider2 />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/resturants" element={<Resturants />} />
          <Route path="/resturants/:id" element={<ResturantsDetails />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<PlaceDetails />} />
          <Route path="/molls" element={<Molls />} />
          <Route path="/molls/:id" element={<MollDetails />} />
          <Route path="/Contacts" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        {/* </Layout> */}
        <WhatsAppIconButton />
        <Footer />
        </ScrollToTop>
      </ThemeProvider>)}

    </div>
  );
}

export default App;
