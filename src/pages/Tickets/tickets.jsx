import React from "react";

import Section from "../../components/section/Section";
import { Box, Stack, Typography } from "@mui/material";
import ContactSection from "../home/contactSection";

import ticket from '../home/servicesSVG/ticket.svg'
import train from '../home/servicesSVG/train.svg'
import plane from '../home/servicesSVG/plane.svg'

export default function Ticketss(){

    const Services = [
        
        {
            id: 1,
            name: " حجوز لتذاكر الطيران",
            icon: plane
        },
        {
            id: 2,
            name: "حجوز لتذاكر القطار",
            icon: train
        },
        {
          id: 3,
          name: "حجوز تذاكر لمختلف الفعاليات",
          icon: ticket
      },

    ]

    
    return(
        <Section header=' تذاكر'>
            <Box mt={4} mb={10} textAlign="center">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="center"
                    alignItems={{ xs: 'center', md: 'center' }}
                    py={4}
                    gap={{xs: "35px", md: "5px"}}
                >
                    {Services.map((item) => (
                    <Box key={item.id} display="flex" flexDirection="column" alignItems="center" mx={4} 
                        >
                        <img src={item.icon} width="120px" height="120px" alt={`Icon ${item.name}`} mb={3} />
                        <Typography
                        fontSize={{ xs: '18px', md: '24px' }}
                        textAlign="center"
                        lineHeight={{ xs: '24px', md: '28px' }}
                        fontWeight={700}
                        color="#005A5A"
                        mt="10px"
                        >
                        {item.name}
                        </Typography>
                    </Box>
                    ))}
                </Stack>
            </Box>

            <ContactSection/>
               
        </Section>
    )
}