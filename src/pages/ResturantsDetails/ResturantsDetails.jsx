import React, { useState } from 'react';
import SliderForPages from '../../components/slider/slider';
import Section from '../../components/section/Section';
import { Stack, Typography, Box, Button, Modal  } from '@mui/material';
import BookingForm from '../../components/BookingForm'; 
import { useParams } from 'react-router-dom';
import { AllRestaurants } from '../../data/data';
import Slider2 from '../../components/Slider2/Slider2';

function ResturantsDetails() {
    const { id } = useParams();
    const restaurant = AllRestaurants.filter((item => item.id === id))[0]

    const [isFormVisible, setFormVisible] = useState(false);

    const handleOpenForm = () => {
      setFormVisible(true);
    };
  
    const handleCloseForm = () => {
      setFormVisible(false);
    };

    const split = restaurant.description.split('\n')

    console.log(split)
  
    return (
      <div >
        
        <Section header={restaurant.name} >
        <Slider2 slides={restaurant.imgList} photo={restaurant.img}/>
            <Stack>
            {split.map((text)=>
                <Typography variant='h3' p={{xs:'30px',md:"30px 100px"}} sx={{overflowY:'auto'}} lineHeight={1.5}>
                    {text}
                </Typography>
                )}
            </Stack>
           
            <Stack direction={{xs:'column',md:'row'}} alignItems={{xs:'center',md:'flex-start'}} justifyContent={'center'} gap={{xs:5,md:30}} mt={3}>
                <Box width={400}>
                    {/* <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' ><strong>Price:</strong> 2000 /person</Typography> */}
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >موقع الفندق:</Typography>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >{restaurant.location}</Typography>

                </Box>

                {/* <Box width={250}>
                <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Avaliable Times:</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >08:00 - 12:00</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >13:00 - 20:00</Typography>
                </Box> */}
            </Stack>
            <Stack alignItems={'center'} justifyContent={'center'} mt={3} >
                <Button sx={{height:60, width:200, backgroundColor:"#cdc392", color:'#005A5A', fontSize: 30, borderBottom:'5px solid #005A5A'}}
                onClick={handleOpenForm}>
                    احجز الآن
                </Button>
            </Stack>
        </Section>
        <Stack>
                <Typography variant='h3' p={{xs:'30px',md:"30px"}} lineHeight={1.5}>
                أو تواصل معنا عبر الواتس آب للإستفسار أكثر
                </Typography>
        </Stack>
     
        
        <Modal open={isFormVisible} onClose={handleCloseForm}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
          <BookingForm namePlace={restaurant.name} onClose={handleCloseForm} />
        </Box>
      </Modal>
      
      </div>
    ); 
  }
  
  export default ResturantsDetails;