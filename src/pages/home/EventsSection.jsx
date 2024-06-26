import React from "react";

import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import { Grid} from "@mui/material";
import img1 from "./event1.jpeg";
import img2 from "./event2.jpeg";
import img3 from "./event3.jpeg";

import EventCard from '../../components/card/EventCard';
import { FeaturedActivities } from "../../data/data";


export default function EventsSection() {
  

 
  return (
    <Section header="الاكثر طلبا" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
      >
        {FeaturedActivities.map((item)=><EventCard key={item.id} event={item.name} img={item.img} link={item.link}/>)}
          
      </Grid>
      <ExtractBtn link="/activities" text="كل الفعاليات " />
    </Section>
  );
}
