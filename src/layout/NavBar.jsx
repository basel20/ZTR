import React, {useState} from "react";
import {Box,Stack,List,ListItem,ListItemButton,ButtonBase,  Drawer, IconButton, } from "@mui/material";
import theme from "../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";


export default function Navbar(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navStyles = {
    listText: {
      fontSize: "16px",
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
      justifyContent: "space-evenly",
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
    { item: "Home", link: "/" },
    { item: "Categories", link: "/CitiesPage" },
    { item: "Events", link: "/GuiedsPage" },
    { item: "Contacts", link: "/ContactsPage" },
    { item: "About", link: "/Abotus" },
  ];

  const newNavItems = listItems.map((newNavItem, index) => (
    <ListItem key={index} sx={navStyles.listItem}>
      <ListItemButton
        to={newNavItem.link}
        sx={navStyles.listText}
        component={Link}
        onClick={() => setDrawerOpen(false)}
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
      p={{xs:'0 30px',md:"0 100px"}}
      bgcolor={props.color}
      position="sticky"
      sx={{borderBottom:'5px solid #005A5A'}}
    > 
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { md: "none" } }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <ButtonBase
        disableRipple
        href="/"
        sx={{
          height: "100%",
          width: "90px",
          background: ``,
          backgroundSize: "cover",
          border: "none",
          borderRadius: 0,
          color:'#005A5A',
          fontSize:'40px'
        }}
      >
        ZTR
      </ButtonBase>

      <Box display={{ xs: "none", md: "flex" }} alignItems="center">
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          {newNavItems}
        </List>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          p="20px"
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
        <List>{newNavItems}</List>
      </Drawer>

    </Stack>
    // </Container>
  );
}
