import React from "react";
import { Box, Button,  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EventCard({event, img, link }) {
  const navigate = useNavigate()
  return (
    
            <Box
              sx={{
                height: "350px",
                width: "100%",
                background: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Button
                sx={{
                  height: "50px",
                  backgroundColor: "#005A5A",
                  opacity:'0.8',                  
                  display: "flex",
                  alignItems: {xs:'center',md:"left"},
                  justifyContent: {xs:'center',md:"left"},
                  pl: "20px",
                  borderRadius:'0'
                  
                }}
                onClick={() => navigate(link)}
              >
                <Typography variant="h4"  sx={{color:'#ffff', filter:"brightness(150%)"}}>
                  {event}
                </Typography>
              </Button>
            </Box>
  );
}
