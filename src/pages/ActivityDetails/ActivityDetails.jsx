import React, { useState } from 'react';
import SliderForPages from '../../components/slider/slider';
import Section from '../../components/section/Section';
import { Stack, Typography, Box, Button, Modal  } from '@mui/material';
import BookingForm from '../../components/BookingForm'; 
import { useParams } from 'react-router-dom';
import { AllActivities } from '../../data/data';

function ActivityDetails() {
    const { id } = useParams();
    const Activity = AllActivities.filter((item => item.id === id))[0]

    const [isFormVisible, setFormVisible] = useState(false);

    const handleOpenForm = () => {
      setFormVisible(true);
    };
  
    const handleCloseForm = () => {
      setFormVisible(false);
    };
  
    return (
      <div >
        <SliderForPages/>
        <Section header={Activity.hotel} >
            <Stack>
                <Typography variant='h3' p={{xs:'0 30px',md:"0 100px"}} lineHeight={1.5}>
                    {Activity.description}
                </Typography>
            </Stack>
            <Stack direction={{xs:'column',md:'row'}} alignItems={{xs:'center',md:'flex-start'}} justifyContent={'center'} gap={{xs:5,md:30}} mt={3}>
                {/* <Box width={400}>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Location:</Typography>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >{hotel.location}</Typography>
                </Box> */}

                {/* <Box width={250}>
                <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Avaliable Times:</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >08:00 - 12:00</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >13:00 - 20:00</Typography>
                </Box> */}
            </Stack>
            <Stack alignItems={'center'} justifyContent={'center'} mt={3} >
                <Button sx={{height:60, width:200, backgroundColor:"#cdc392", color:'#005A5A', fontSize: 30, borderBottom:'5px solid #005A5A'}}
                onClick={handleOpenForm}>
                    Book
                </Button>
            </Stack>
        </Section>
     
        
        <Modal open={isFormVisible} onClose={handleCloseForm}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
          <BookingForm name={Activity.hotel} onClose={handleCloseForm} />
        </Box>
      </Modal>
      
      </div>
    ); 
  }
  
  export default ActivityDetails;