
import ContactSection from './contactSection';
import HotelsSection from './HotelsSection';
import SliderForPages from '../../components/slider/slider';
import ResturantsSection from './resturantsSection';
import CategoriesSection from '../../components/Categories/Categories';
import { Stack } from '@mui/material';
import ServicesSection from './ServicsSection';

import EventsSection from './EventsSection';

function Home() {
  
    return (
      <div >
        <SliderForPages/>
        <ServicesSection/>
        <Stack width={'100%'} alignItems={"center"} justifyContent={'center'} gap={2}>
          <CategoriesSection/>
        </Stack>
        <EventsSection />
        <HotelsSection/>
        <ResturantsSection/>
        
        <ContactSection/>
      </div>
    );
  }
  
  export default Home;