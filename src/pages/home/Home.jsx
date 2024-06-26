
import React, { useRef } from 'react';
import ContactSection from './contactSection';
import HotelsSection from './HotelsSection';
import SliderForPages from '../../components/slider/slider';
import ResturantsSection from './resturantsSection';
import CategoriesSection from '../../components/Categories/Categories';
import { Stack } from '@mui/material';
import ServicesSection from './ServicsSection';
import { Slides } from "../../components/slider/images/data";

import EventsSection from './EventsSection';



function Home() {
  
  
    return (
      <div >
        <SliderForPages Slides={Slides}/>
        <ServicesSection/>
        <Stack width={'100%'} alignItems={"center"} justifyContent={'center'} gap={2}>
          <CategoriesSection/>
        </Stack>
        <HotelsSection/>
        <EventsSection />
        <ResturantsSection/>
        <ContactSection/>
      </div>
    );
  }
  
  export default Home;