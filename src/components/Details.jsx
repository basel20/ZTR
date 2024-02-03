import React, { useState } from 'react';
import SliderForPages from './slider/slider';
import Section from './section/Section';
import { Stack, Typography, Box, Button, Modal  } from '@mui/material';
import BookingForm from './BookingForm'; 

function Details() {

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
        <Section header='New Castle' >
            <Stack>
                <Typography variant='h3' p={{xs:'0 30px',md:"0 100px"}} lineHeight={1.5}>
                The square was originally designed to be the site of an equestrian statue of King Louis XV, commissioned in 1748 by the merchants of Paris, to celebrate the recovery of King Louis XV from a serious illness. The site chosen for the statue was the large esplanade, or space between the revolving gate the Tuileries Gardens and the Cour-la-Reine, a popular lane for horseback riding at the edge of the city. At the time, the Concorde bridge and the Rue de Rivoli did not exist, and the Rue Royale was a muddy lane that descended down to a marsh beside the Seine.</Typography>
            </Stack>
            <Stack direction={{xs:'column',md:'row'}} alignItems={{xs:'center',md:'flex-start'}} justifyContent={'center'} gap={{xs:5,md:30}} mt={3}>
                <Box width={400}>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' > <strong>Price:</strong> 2000 /person</Typography>
                    <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Location: Malyshiva, 144, Moscow</Typography>

                </Box>

                <Box width={250}>
                <Typography variant='h3' borderBottom='3px solid #005A5A' color={'#005A5A'} p='10px 0' >Avaliable Times:</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >08:00 - 12:00</Typography>
                <Typography variant='h4' borderBottom='3px solid #005A5A' color={'#a49c75'} p='10px 0' >13:00 - 20:00</Typography>
                </Box>
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
          <BookingForm onClose={handleCloseForm} />
        </Box>
      </Modal>
      
      </div>
    ); 
  }
  
  export default Details;