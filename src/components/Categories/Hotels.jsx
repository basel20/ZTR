import React from "react";

import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import { Grid} from "@mui/material";
import img1 from "./imgs/event1.jpeg";
import img2 from "./imgs/event2.jpeg";
import img3 from "./imgs/event3.jpeg";
import img4 from "./imgs/event4.jpeg";

import EventCard from '../../components/card/EventCard';
import { AllHotels } from "../../data/data";

export default function Hotels() {


  return (
    <Section header="Hotels" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
      >
        {AllHotels.map((item, index)=><EventCard key={index} event={item.hotel} img={item.img} link={item.link}/>)}
          
      </Grid>
      {/* <ExtractBtn link="/CitiesPage" text="More Hotels" /> */}
    </Section>
  );
}
