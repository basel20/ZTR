import React from "react";
import Footer from "./layout/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contacts/ConntactsPage";
import { Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Hotels from "./pages/Hotels/Hotels";
import "./App.css";
import Navbar from "./layout/NavBar";
import Resturants from "./components/Categories/resturants";
import Details from "./components/Details";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import WhatsAppIconButton from "./components/WhatsAppIcon";
import Activities from "./pages/Activities/Activities";
import ActivityDetails from "./pages/ActivityDetails/ActivityDetails";
// import 

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/resturants" element={<Resturants />} />
          <Route path="/Contacts" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        {/* </Layout> */}
        <WhatsAppIconButton />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
