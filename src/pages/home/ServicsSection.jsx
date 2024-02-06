import React from "react";

import Section from "../../components/section/Section";
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../../layout/masar2.svg'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { textAlign } from "@mui/system";
import clients from './servicesSVG/clients.svg'


export default function ServicesSection(){

    const Services = [
        {
            id: 1,
            name: "",
            icon: ""
        }
    ]

    
    return(
        <Section header=' خطوتك الأولى لرحلة رائعة'>
            <Box mt={4} textAlign="center">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="center"
                    alignItems={{ xs: 'center', md: 'center' }}
                    borderTop={'5px solid #005A5A'}
                    borderBottom={'5px solid #005A5A'}
                    py={4}
                >
                    {[1, 2, 3, 4].map((index) => (
                    <Box key={index} display="flex" flexDirection="column" alignItems="center" mx={2}>
                        <img src={clients} width="40px" height="40px" alt={`Icon ${index}`} mb={2} />
                        <Typography
                        fontSize={{ xs: '18px', md: '20px' }}
                        textAlign="center"
                        lineHeight={{ xs: '24px', md: '28px' }}
                        fontWeight={700}
                        color="#005A5A"
                        >
                        Card {index}
                        </Typography>
                    </Box>
                    ))}
                </Stack>
            </Box>
                {/* <Box   sx={{width:{ xs:'100%',md:'60%'},height:{xs:'96%',md:'98%'}, display:'flex', flexDirection:'column',justifyContent:'center', pl:{md:'5%',lg:'10%'}}} 
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
                </Box> */}
         
        </Section>
    )
}