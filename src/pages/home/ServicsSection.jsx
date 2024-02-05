import React from "react";

import Section from "../../components/section/Section";
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../../layout/masar2.svg'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';



export default function ServicesSection(){

    
    return(
        <Section header='Our Services'>
            <Stack width={{xs:'100%',md:'100%'}} height={{xs:'300px',md:'300px'}} direction={{ md:'row'}} alignItems='center' justifyContent='center' borderTop={'5px solid #005A5A'} borderBottom={'5px solid #005A5A'}>
                <Box   sx={{width:{ xs:'100%',md:'50%'},height:{xs:'96%',md:'98%'}, display:'flex', flexDirection:'column',justifyContent:'center', pl:{md:'5%',lg:'10%'}}} 
                borderTop={'5px solid #b9b083'} borderBottom={'5px solid #b9b083'}>

                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'center', md:'left'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>Exclusive Private Car Delivery
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'center', md:'left'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5 , color:'#b9b083'}}/>Hotel Reservations with Exclusive Discounts
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'center', md:'left'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>Restaurant reservations
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'center', md:'left'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>Activities bookings
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}    textAlign={{xs:'center', md:'left'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>Ticket Reservations Across Russia
                    </Typography>
                </Box>
                <Box display={{xs:'none',md:'flex'}} justifyContent={'center'} height={'98%'} width={{ xs:'100%',md:'40%'}} pr={{md:'5%',lg:'10%'}} borderTop={'5px solid #b9b083'} borderBottom={'5px solid #b9b083'}>
                    <Box display={'flex'} height={'100%'} width={{ xs:'100%',md:'100%'}} alignItems={'center'}>
                        <img height={'80%'} width={'100%'} alt="" src={Logo}/>
                    </Box>
                </Box>
            </Stack>
        </Section>
    )
}