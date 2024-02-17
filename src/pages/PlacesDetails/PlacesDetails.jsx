import React, { useState } from 'react';
import Section from '../../components/section/Section';
import { Stack, Typography, Box, Button, Modal  } from '@mui/material';
import BookingForm from '../../components/BookingForm'; 
import { useParams } from 'react-router-dom';
import { AllPlaces } from '../../data/data';
import Slider2 from '../../components/Slider2/Slider2';

function PlaceDetails() {
    const { id } = useParams();
    const Place = AllPlaces.filter((item => item.id === id))[0]

    const [isFormVisible, setFormVisible] = useState(false);

    const handleOpenForm = () => {
      setFormVisible(true);
    };
  
    const handleCloseForm = () => {
      setFormVisible(false);
    };
  
    const split=Place.description.split('\n')

    return (
      <div >
       
        <Section header={Place.name} >
        <Slider2 slides={Place.imgList} photo={Place.img}/>
            <Stack>
              {split.map((text)=>
                <Typography variant='h3' p={{xs:'30px',md:"30px 140px"}} sx={{overflowY:'auto'}} lineHeight={1.5}>
                    {text}
                </Typography>
                )}
            </Stack>
            <Stack direction={{xs:'column',md:'row'}} alignItems={{xs:'center',md:'flex-start'}} justifyContent={'center'} gap={{xs:5,md:30}} mt={3}>
                <Box width={400}>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Location:</Typography>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >{Place.location}</Typography>
                </Box> 

                {/* <Box width={250}>
                <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Avaliable Times:</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >08:00 - 12:00</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >13:00 - 20:00</Typography>
                </Box> */}
            </Stack>
        </Section>
     
        
        <Modal open={isFormVisible} onClose={handleCloseForm}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
          <BookingForm namePlace={Place.name} onClose={handleCloseForm} />
        </Box>
      </Modal>
      
      </div>
    ); 
  }
  
  export default PlaceDetails;