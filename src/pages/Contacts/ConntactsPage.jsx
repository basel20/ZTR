import React from "react";

import Section from "../../components/section/Section";
import {Stack, Typography, Card, CardContent } from "@mui/material";
import {Phone} from "@mui/icons-material";
import theme from '../../theme/theme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import MapCard from "./Map";



export default function ContactPage(){

    const Contacts = [
        {icon:<EmailIcon sx={{fontSize:'56px'}}/>, name:'الايميل', info:'moscowmasar@gmail.com'},
        {icon:<Phone sx={{fontSize:'56px'}}/>, name:'الهاتف', info:'+793776441777'},
        {icon:<LocationOnIcon sx={{fontSize:'56px'}}/>, name:'الموقع', info:'SPB,balshoi brasbekt'}
    ]

    const ContactsList = Contacts.map((item, index) => 
        <Card key={index} sx={{
            height:'210px',
            width:'300px',
            border:'none',
            borderTop:`4px solid #005A5A` ,
            borderRadius:0,
            display:'flex',
            flexDirection:'column',
        }}>
        <CardContent sx={{height:'35%'}}>
            <Typography fontWeight={600} textAlign='right' color={theme.palette.primary.main} p='10px'>{item.icon}</Typography>
            <Typography fontSize='20px' fontWeight={600} textAlign='right' color={theme.palette.text.primary} p='5px 10px 5px 10px'>{item.name}</Typography>
            <Typography fontSize='20px' fontWeight={400} textAlign='right' color={theme.palette.text.primary} p='5px 10px'>{item.info}</Typography>
        </CardContent>
        </Card>
    )
    
    return(
            <Stack  >
                <Section header="تواصل بنا" >
                <Stack direction={{xs:'column',md:'row'}} alignItems='center' justifyContent='center' gap={10}>
                    {ContactsList}
                </Stack>
                </Section>

                <Section header="الموقع" >
                    <MapCard/>
                </Section>
                
            </Stack>
    )
}