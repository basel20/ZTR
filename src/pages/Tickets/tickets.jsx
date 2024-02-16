import React from "react";

import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import { Grid} from "@mui/material";
import ContactSection from "../home/contactSection";

import EventCard from '../../components/card/EventCard';

import { AllTickets } from "../../data/data";

export default function Tickets() {


  

  return (
    <Section header="تذاكر" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
        mb={10}
      >
        {AllTickets.map((item, index)=><EventCard key={index} event={item.name} img={item.img} />)}
          
      </Grid>

      <ContactSection/>
    </Section>
  );
}
