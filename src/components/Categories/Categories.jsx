import React from "react";
import Section from "../section/Section";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from "./shopping.svg";
import img2 from "./restaurant.svg";
import img3 from "./park.svg";
import img4 from "./hotel.svg";


import { useNavigate } from "react-router-dom";


export default function CategoriesSection() {
 
  const navigate = useNavigate()
  

  const Categories = [
    { cat: "Hotels", img: img4, link: "/hotels" },
    { cat: "Activities", img: img3, link: "/parks" },
    { cat: "Parks", img: img3, link: "/parks" },
    { cat: "Malls", img: img1, link: "/malls" },
    { cat: "Resturants", img: img2, link: "/resturants" },
    { cat: "Transfer", img: img4, link: "/transfer" },
    { cat: "Tickets", img: img1, link: "/tickets" },
    { cat: "Other", img: img4, link: "/other" }
  ];

  return (
    <div id="categories">
    <Section header="Categories" >
    
      <Stack
      width='100%'
      justifySelf={'center'}
        display="grid"
        direction={"row"}
        gridTemplateColumns={{xs:'1fr 1fr',md:"1fr 1fr 1fr 1fr"}}
        alignItems={"center"}
        justifyContent={'center'}
        gap={10}
      >
        {
          Categories?.map((item) => (
            <Box
              sx={{
                height: {xs:'180px',md:"250px"},
                width: {xs:'130px',md:"180px"},
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                
              }}
            >
            <img src={item.img} alt=""/>


              <Button
                sx={{
                  height: {xs:'30px',md:"50px"},
                  backgroundColor: "#005A5A",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius:'0', 
                  opacity:'0.8',
                }}
                onClick={() => navigate(item.link)}
              >
                <Typography fontSize={{xs:'18px', md:'24px'}} textAlign="left" color="#fff" sx={{filter:"brightness(150%)"}} fontFamily={"Bai Jamjuree', sans-serif"}>
                  {item.cat}
                </Typography>
              </Button>
            </Box>
          ))
        }
      </Stack>
    </Section>
    </div>
  );
}
