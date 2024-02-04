// WhatsAppIcon.jsx

import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppIconButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/message/KOYNSKJN4S7CD1`;
    window.open(whatsappLink, '_blank');
  };


  return (
    <IconButton
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
      }}
      onClick={handleWhatsAppClick}
    >
      <WhatsAppIcon style={{fontSize: "50px"}} />
    </IconButton>
  );
};

export default WhatsAppIconButton;
