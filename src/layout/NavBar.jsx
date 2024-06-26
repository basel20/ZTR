import React, {useState} from "react";
import {Box,Stack,List,ListItem,ListItemButton,ButtonBase,  Drawer, IconButton, } from "@mui/material";
import theme from "../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Logo from './masar3.png'
//import LogoSm from './masar2.svg'
//import LanguageIcon from '@mui/icons-material/Language';
//import i18n from "../components/Trans/i18";

export default function Navbar(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);

  //const [isLang, setIsLang] = useState(false);

 //{ const scrollToCategories = (e) => {
   // e.preventDefault()
   // document.getElementById('categories').scrollIntoView();
  //}}

  //function toggleLang() {
  /// setIsLang(!isLang);
  //}

  //const changeLanguage = (lng) => {
   //// i18n.changeLanguage(lng);
    //toggleLang();
  //};

  const navStyles = {
    listText: {
      fontSize: "18px",
      textTransform: "uppercase",
      fontWeight: "600",
      color: "#005A5A",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },

    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      color: "#005A5A",
    },

    btn: {
      height: "30px",
      backgroundColor: theme.palette.primary.main,
      boreder: "3px solid #005A5A",
      borderRadius:0, 
      color: "#005A5A",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  };

  const listItems = [
    { item: "الرئيسية", link: "/" },
    { item: "الفئات", link: "/Categories" },
    { item: "الفنادق", link: "/Hotels" },
    { item: "الفعاليات", link: "/Activities" },
    { item: "تواصل ", link: "/Contacts" },
    { item: " نحن", link: "/About" },
  ];

  const newNavItems = listItems.map((newNavItem, index) => (
    <ListItem key={index} sx={navStyles.listItem} textAlign="center">
      <ListItemButton
        to={newNavItem.link}
        sx={navStyles.listText}
        component={Link}
        onClick={() => setDrawerOpen(false)}
        textAlign="center"
      >
        {newNavItem.item}
      </ListItemButton>
    </ListItem>
  ));

  return (
    // <Container>
    <Stack
      height="100px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={{xs:'0 20px',md:"0 50px"}}
      bgcolor={props.color}
      position="sticky"
      sx={{borderBottom:'5px solid #005A5A'}}
    > 
    <Box display={{ xs: "flex", md: "none" }} alignItems="center" >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon sx={{ color: '#005A5A' }}/>
      </IconButton>
      {/* <IconButton onClick={() => changeLanguage(isLang ? "en" : "ar")}>
          <LanguageIcon sx={{ color: '#005A5A' }} />
        </IconButton> */}
      </Box>

      

      <ButtonBase
        disableRipple
        href="/"
        sx={{
          height: "98%",
          width: "300px",
          background: `url(${Logo})`,
          backgroundSize: "100% 100%",
          border: "none",
          borderRadius: 0,
          color:'#005A5A',
          fontSize:'40px',
          filter:"brightness(100%)"
        }}
      >
       
      </ButtonBase>

      <Box display={{ xs: "none", md: "flex" }} alignItems="center">
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            width: 'fitContent'

          }}
        >
          {newNavItems}
        </List>
        {/* <IconButton onClick={() => changeLanguage(isLang ? "en" : "ar")}>
          <LanguageIcon sx={{color:'#005A5A'}}/>
        </IconButton> */}
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          p="20px"
          width="200px"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="close"
            sx={{ ml: 1 }}
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <List >{newNavItems}</List>
        
      </Drawer>

    </Stack>
    // </Container>
  );
}
