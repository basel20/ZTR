import React from "react";

import Section from "../../components/section/Section";
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../../layout/masar2.svg'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { textAlign } from "@mui/system";



export default function ServicesSection(){

    
    return(
        <Section header=' خطوتك الأولى لرحلة رائعة'>
            <Stack width={{xs:'100%',md:'100%'}}  direction={{ md:'row'}} alignItems='center' justifyContent='center' borderTop={'5px solid #005A5A'} borderBottom={'5px solid #005A5A'}>
                <Box   sx={{width:{ xs:'100%',md:'60%'},height:{xs:'96%',md:'98%'}, display:'flex', flexDirection:'column',justifyContent:'center', pl:{md:'5%',lg:'10%'}}} 
                padding={{xs:'10px',md:'20px'}}>

                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>نفخر بخدمتنا لأكثر من ألف عميل خلال 2023 من الكويت، السعودية، البحرين، قطر، عمان والإمارات.
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5 , color:'#b9b083'}}/>نوفر خصومات لحجوازات الفنادق في موسكو وسانت بطرسبورف
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>حجوزات مضمونة وخدمات ممتازة
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}  textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>لدينا كادر من المرشدين السياحيين المتحدثين بالعربية
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}    textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>نقدم حجوزات لجميع الفعاليات السياحية
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}    textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/>نوفر خدمات توصيل سيارات خاصة
                    </Typography>
                    <Typography fontSize={{xs:'24px',md:'26px'}}    textAlign={{xs:'right', md:'right'}} lineHeight={{xs:'30px', md:'40px'}} fontWeight={700} color='#005A5A' opacity='1'>
                    <RadioButtonCheckedIcon sx={{mr:1, pt:0.5, color:'#b9b083'}}/> نتمنى لكم رحلة سياحية ممتعة في روسيا.
                    </Typography>
                </Box>
                <Box display={{xs:'none',md:'flex'}} justifyContent={'center'} height={'98%'} width={{ xs:'100%',md:'30%'}} pr={{md:'5%',lg:'10%'}} borderTop={'5px solid #b9b083'} borderBottom={'5px solid #b9b083'}>
                    <Box display={'flex'} height={'100%'} width={{ xs:'100%',md:'100%'}} alignItems={'center'}>
                        <img height={'80%'} width={'100%'} alt="" src={Logo}/>
                    </Box>
                </Box>
            </Stack>
        </Section>
    )
}