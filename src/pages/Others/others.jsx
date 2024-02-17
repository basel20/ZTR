import React from "react";

import Section from "../../components/section/Section";
import { Box, Stack, Typography } from "@mui/material";
import ContactSection from "../home/contactSection";
import guide from '../home/servicesSVG/guide.svg'
import ticket from '../home/servicesSVG/ticket.svg'


export default function Others(){

    const Services = [
        
        {
            id: 1,
            name: " كادر من المرشدين السياحيين المتحدثين بالعربية",
            icon: guide
        },
        {
            id: 2,
            name: "نقدم حجوزات لجميع الفعاليات السياحية",
            icon: ticket
        },

    ]

    
    return(
        <Section header=' المزيد من الخدمات'>
            {/*<Box mt={4} mb={10} textAlign="center">
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
                        <img src={item.icon} width="100px" height="100px" alt={`Icon ${item.name}`} mb={3} />
                        <Typography
                        fontSize={{ xs: '18px', md: '20px' }}
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
            </Box>*/}
            <Typography variant="h2" color={'#005A5A'} fontWeight={600} p={{xs:'0 20px', md:'0 100px'}}>
                نقوم بتوفير جميع الخدمات السياحية, للحجز او الاستفسار يرجى التواصل معناعبر الايميل او عبر حساباتنا عبر مواقع التواصل الاجتماعية.
            </Typography>
               
        </Section>
    )
}