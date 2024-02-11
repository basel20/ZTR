// BookingForm.jsx
import React from 'react';
import { Stack, TextField, Button, Typography, InputLabel } from '@mui/material';
import emailjs from 'emailjs-com';


const BookingFormHotel = ({ namePlace, onClose }) => {

 
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const description = formData.get('description');
    const people = formData.get('people');
    const date1= formData.get('date1');
    const date2= formData.get('date2');

    // Send email using EmailJS
    try {
      await emailjs.send('service_0v3br49', 'template_u4j941f', {
        to_name: 'Masar', // Replace with the recipient's name
        resevition:`${namePlace}`,
        from_name: name,
        from_email: email,
        phone,
        people:people,
        date1:date1,
        date2:date2,
        description,
      }, 'Sk5fGkT0aCETZxyIV');
      alert('لقد تم ارسال طلبك, سيتم الرد عليك قريبا عبر الايميل او الوتس أب')
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('حدث خطأ أثناء إرسال البريد الإلكتروني. يرجى المحاولة مرة أخرى');
    }

    // Additional logic for WhatsApp (using Twilio) can be added here

    onClose(); // Close the form after submission
  };

  return (
    
    <form onSubmit={handleSubmit2}>
      <Stack spacing={1} p={2}>
        
        <Typography> قم بالحجز في {namePlace} </Typography>
        <TextField dir='rtl' sx={{textAlign:'right'}} name="name" label="الاسم" variant="outlined" fullWidth required InputLabelProps={{dir:'rtl'}}/>
        <TextField sx={{textAlign:'right'}} name="email" label="الايميل" type="email" variant="outlined" fullWidth required />
        <TextField sx={{textAlign:'right'}} name="phone" label="رقم الهاتف- وايس اب" variant="outlined" fullWidth required />
        <TextField sx={{textAlign:'right'}} name="people" label="عدد الاشخاص" variant="outlined" fullWidth required />
        <InputLabel>من تاريخ- الى تاريخ</InputLabel>
        <TextField sx={{textAlign:'right'}} name="date1"  type='date' variant="outlined" fullWidth required />
        <TextField dir='rtl' sx={{textAlign:'right'}} name="date2"  type='date' variant="outlined" fullWidth required  />
        <TextField
          sx={{textAlign:'right'}}
          name="description"
          label="معلومات اضافية"
          multiline
          rows={2}
          variant="outlined"
          fullWidth
          required
        />
        
        <Button type="submit" variant="contained" color="primary" sx={{borderBottom:'3px solid #005A5A', color:'#fff'}}>
          تأكيد
        </Button>
      </Stack>
    </form>
  
   
  );
};

export default BookingFormHotel;
