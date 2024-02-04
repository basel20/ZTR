// WhatsAppIcon.jsx

import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppIconButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/+79265058992`;
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
      <WhatsAppIcon style={{fontSize: "70px",}} />
    </IconButton>
  );
};

export default WhatsAppIconButton;
