import React from "react";

import Section from "../../components/section/Section";
import { Grid} from "@mui/material";

import EventCard from '../../components/card/EventCard';
import { AllPlaces } from "../../data/data";

export default function Places() {


  return (
    <Section header="وجهات سياحية" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
      >
        {AllPlaces.map((item, index)=><EventCard key={index} event={item.name} img={item.img} link={item.link}/>)}
          
      </Grid>
      {/* <ExtractBtn link="/CitiesPage" text="More Hotels" /> */}
    </Section>
  );
}
