import React from 'react';
import { Box, List, ListItem, Typography ,Stack, ListItemButton, IconButton, Container} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Footer(){
    
    
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

    const listItems = [{item:'Home'},{item:'Categories'},{item:'Events'},{item:'Contacts'}]

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
                <IconButton sx={{backgroundColor:'#CDC392'}}>
                    <TwitterIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                <IconButton sx={{backgroundColor:'#CDC392'}}>
                    <FacebookIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                <IconButton sx={{backgroundColor:'#CDC392'}}>
                    <InstagramIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                </Box>
                <Typography variant={{xs:'h4',md:'h2'}} pt={1}> Take your first step to a great trip</Typography>
                <List sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', }}>
                    {newNavItems}
                </List>
                &copy; Copyright 2022
            </Stack>
            </Container>
            </Stack>
            
    )
}