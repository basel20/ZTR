import React, {useState } from 'react'

import {Box,   Stack, Button,  } from '@mui/material';


export default function Slider2( { slides, photo} ) {
 
    const [roomImage, setRoomImage] = useState(photo)

  return (
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems:'center',
                    width: "100%"
                }}
            >   
                <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, width: {xs: "100%", md :"80%"}, height:{md:600}}}>
                    <Box sx={{ backgroundImage: `url(${roomImage})`, 
                            height: {xs: "400px", md: "auto"},
                            width: "100%", 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }}>
                       
                    </Box>
                    <Box sx={{display: "flex", flexDirection: {xs: "row", md: "column"},  justifyContent: "center", flexWrap: "wrap"}}>
                       { slides.map((slide) => {
                        return (
                            <Box sx={{margin: "10px"}}>
                                <Button variant='contained' 
                                    sx={{ backgroundImage: `url(${slide.img})`, 
                                    backgroundSize: "cover",
                                    backgroundPosition: "center", 
                                    width: "70px", 
                                    height: "70px"}} 
                                    onClick={() => setRoomImage(slide.img)}
                                    > </Button>
                            </Box>
                        )
                       }) }

                    </Box>
                </Box>
               
      </Stack>

   
  )
}
