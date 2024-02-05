import React from "react";
import Section from "../section/Section";
import { Box, Button, Stack, Typography } from "@mui/material";
import img1 from "./shopping.svg";
import img2 from "./restaurant.svg";
import img3 from "./park.svg";
import img4 from "./hotel.svg";
import img5 from "./car.svg";
import img6 from "./activities.svg";
import img7 from "./dots.svg";
import img8 from "./tickets.svg";


import { useNavigate } from "react-router-dom";


export default function CategoriesSection() {
 
  const navigate = useNavigate()
  

  const Categories = [
    { cat: "فنادق", img: img4, link: "/hotels" },
    { cat: "فعاليات", img: img6, link: "/activities" },
    { cat: "متنزهات", img: img3, link: "/parks" },
    { cat: "مراكز التسوق", img: img1, link: "/malls" },
    { cat: "مطاعم", img: img2, link: "/resturants" },
    { cat: "توصيل", img: img5, link: "/transfer" },
    { cat: "تذاكر", img: img8, link: "/tickets" },
    { cat: "أخرى", img: img7, link: "/other" }
  ];

  return (
    <div id="categories">
    <Section header="كل الخدمات" >
    
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
            <img src={item.img} height='90%' alt=""/>


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
                  '&:hover':{
                    backgroundColor: '#669c9c'
                }}}
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
