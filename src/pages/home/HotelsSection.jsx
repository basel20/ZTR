import React from "react";

import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import {  Grid,  } from "@mui/material";

import { FeaturedHotels } from "../../data/data";

import EventCard from '../../components/card/EventCard';


export default function HotelsSection() {
  
  
  return (
    <Section header="Featured Hotels" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
      >
        {FeaturedHotels.map((item, index)=><EventCard key={index} event={item.hotel} img={item.img} link={item.link}/>)}
          
      </Grid>
      <ExtractBtn link="/hotels" text="More Hotels" />
    </Section>
  );
}
