import React from "react";

import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import { Grid} from "@mui/material";


import EventCard from '../../components/card/EventCard';

import { AllRestaurants } from "../../data/data";

export default function Resturants() {


  

  return (
    <Section header="المطاعم" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
      >
        {AllRestaurants.map((item, index)=><EventCard key={index} event={item.name} img={item.img} link={item.link}/>)}
          
      </Grid>
    </Section>
  );
}
