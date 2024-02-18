import React from 'react';
import { Box, List, ListItem, Typography ,Stack, ListItemButton, IconButton, Container} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snapchat from './snapchat2.svg'


export default function Footer(){

    const openNewTab = (url) => window.open(url, "_blank");
    
    
    const footerStyles ={
        iconStyle:{ 
            padding: '0.4rem',
            fontSize: {xs:'35px' , md:'50px'},
            color:'#FFFFFF',
            '&:hover' :{
            color: '#FFD8A8',
        }},

        iconsBox:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: {xs:'200px',md:'300px'},
            height: '50px',
            fontSize: '30px'},

            listText : {
                
                p:'0 10px',
                m:0,
                fontSize:{xs:'13px',md:'16px'},
                textTransform: 'uppercase',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'left',
                borderRight:'3px solid #fff',
                '&:hover':{
                color: '#FFD8A8'} ,
                
            }, 

            listItem :{
                p:0,
                m:0,
                alignItems:'flex-start',
                color:'#FFFFFF' }
                ,
            contactsBox:{
                display:'flex',
                gap:'10px'
                , justifyContent:'flex-start', alignItems:'flex-start'
            }    
    };

    const listItems = [
        {item: "الرئيسية", link: "/" },
        { item: "الفئات", link: "/Categories" },
        { item: "تواصل ", link: "/Contacts" },
        { item: " نحن", link: "/About" }]

    const newNavItems = listItems.map((newNavItem) => 
                 <ListItem sx={footerStyles.listItem}> 
                    <ListItemButton  sx={footerStyles.listText}>
                        {newNavItem.item}
                    </ListItemButton>
                </ListItem>);


    return(
        
        <Stack  height={{xs:'100%',lg:'300px'}} justifyContent={'center'} alignItems='center'   position='static'    sx={{
            boxSizing: 'border-box',
            backgroundColor: '#005A5A',
            color: '#FFFFFF'
        }}>
        <Container  maxWidth="xl">
        <Stack direction={{md:"column",lg:'column'}} justifyContent='scenter' alignItems='center' spacing={{xs:'20px', lg:'20px'}} p={{xs:'50px', lg:'20px 0 0'}}>
            
            <Box sx={footerStyles.iconsBox}>
                <IconButton onClick={() => openNewTab("https://wa.me/message/KOYNSKJN4S7CD1")} sx={{backgroundColor:'#CDC392'}}>
                    <WhatsAppIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                <IconButton onClick={() => openNewTab("https://www.snapchat.com/add/masar_moscow")} sx={{backgroundColor:'#CDC392'}}>
                    <Box sx={{height: {xs:'35px',md:"50px"}, width: {xs:'35px',md:"50px"}, background: `url(${Snapchat})`, backgroundSize: "100% 100%",}}></Box>
                </IconButton>
                <IconButton onClick={() => openNewTab("https://www.instagram.com/masar.ru?igsh=MWNvbHNja2s3eWQ3Mg==")} sx={{backgroundColor:'#CDC392'}}>
                    <InstagramIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                </Box>
                <Typography variant={{xs:'h3',md:'h2'}} pt={1}><strong> Take Your First Step To A Great Trip</strong></Typography>
                <List sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', pb:'20px' }}>
                    {newNavItems}
                </List>
                &copy; Copyright 2022
            </Stack>
            </Container>
            </Stack>
            
    )
}