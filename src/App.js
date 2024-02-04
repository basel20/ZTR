import React from "react";
import Footer from "./layout/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contacts/ConntactsPage";
import { Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Hotels from "./components/Categories/Hotels";
import "./App.css";
import Navbar from "./layout/NavBar";
import Resturants from "./components/Categories/resturants";
import Details from "./components/Details";
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
          <Route path="/resturants" element={<Resturants />} />
          <Route path="/ContactsPage" element={<ContactPage />} />
          <Route path="/Abotus" element={<AboutPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        {/* </Layout> */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
