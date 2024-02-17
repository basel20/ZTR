import React from "react";
import { Box, Stack, Typography , Link} from "@mui/material";
import {Phone} from "@mui/icons-material";



export default function ContactSection(){

    
    return(
        //<Section header='تواصل معنا'>
            <Stack height={{xs:'250px',md:'250px'}} direction={{ xs:'column',md:'row'}} alignItems={{xs:'center'}} justifyContent={{xs:'center'}}  mb={5}>
                <Box sx={{width:{ xs:'100%',md:'50%'},height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}  borderBottom={'5px solid #b9b083'}  borderLeft={'5px solid #b9b083'}>
                    <Typography fontSize={{xs:'24px',md:'44px'}}  textAlign={{xs:'center', md:'right'}} lineHeight='55px' fontWeight={700} color='#005A5A' p={{xs:'0 40px',md:'0 80px 0 30px'}} opacity='1'>
                    للإستفسار أو الحجز اتصل أو اكتب لنا عبر الواتس آب
                    </Typography>
                </Box>
                <Box sx={{width:{ xs:'100%',md:'50%'},height:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}} borderTop={'5px solid #b9b083'} borderRight={'5px solid #b9b083'}>
                <div dir="ltr">
                <Link  href={`tel:${+79932913981}`} >
                <Typography fontSize={{xs:'28px',md:'50px'}} textAlign='center' lineHeight='75px' fontWeight={600} color='#005A5A' >
                   +79932913981 </Typography>
                </Link>
                </div>
                <Phone sx={{fontSize:{xs:'34px',md:'62px'}, color:'#b9b083', pt:'5px'}}/></Box>
            </Stack>
        //</Section>
    )
}