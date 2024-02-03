// BookingForm.jsx
import React from 'react';
import { Stack, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const BookingForm = ({ onClose }) => {
  

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const description = formData.get('description');

    // Send email using EmailJS
    try {
      await emailjs.send('service_0v3br49', 'template_u4j941f', {
        to_name: 'Masar', // Replace with the recipient's name
        from_name: name,
        from_email: email,
        phone,
        description,
      }, 'Sk5fGkT0aCETZxyIV');
      alert('Email sent successfully')
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email:');
    }

    // Additional logic for WhatsApp (using Twilio) can be added here

    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit2}>
      <Stack spacing={2} p={2}>
        <TextField name="name" label="Name" variant="outlined" fullWidth required />
        <TextField name="email" label="Email" type="email" variant="outlined" fullWidth required />
        <TextField name="phone" label="Phone Number" variant="outlined" fullWidth required />
        <TextField
            name="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{borderBottom:'3px solid #005A5A'}}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default BookingForm;
