import React from "react";

import Section from "../../components/section/Section";
import { Box, Stack, Typography } from "@mui/material";
import {Phone} from "@mui/icons-material";



export default function ContactSection(){

    
    return(
        <Section header='Contact us'>
            <Stack height={{xs:'250px',md:'300px'}} direction={{ xs:'column',md:'row'}} alignItems={{xs:'center'}} justifyContent={{xs:'center'}} sx={{background:'#b9b083', backgroundSize:'100% 100%', opacity:"1.2"}}>
                <Box sx={{width:{ xs:'100%',md:'50%'}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography fontSize={{xs:'24px',md:'48px'}}  textAlign={{xs:'center', md:'left'}} lineHeight='55px' fontWeight={700} color='#fff' p={{xs:'0 40px',md:'0 100px'}} opacity='1'>
                        Call Us If you Want To Book Or Want To Ask A Question.
                    </Typography>
                </Box>
                <Box sx={{width:{ xs:'100%',md:'50%'}, display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                <Phone sx={{fontSize:{xs:'34px',md:'66px'}, color:'#fff', pt:'5px'}}/>
                <Typography fontSize={{xs:'24px',md:'54px'}} textAlign='center' lineHeight='75px' fontWeight={700} color='#005A5A'>
                    (801) 776 441 777</Typography></Box>
            </Stack>
        </Section>
    )
}