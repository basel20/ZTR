import React from "react";
import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import { Grid} from "@mui/material";
import img1 from "./event1.jpeg";
import img2 from "./event2.jpeg";
import img3 from "./event3.jpeg";

import EventCard from '../../components/card/EventCard';


export default function ResturantsSection() {
  
  const Resturants = [
    { resturant: "resturant1", img: img1, link: "" },
    { resturant: "resturant2", img: img2, link: "" },
    { resturant: "resturant3", img: img3, link: "" },
  ];

 
  return (
    <Section header="Resturants" >
      <Grid
        width="100%"
        display="grid"
        direction={{xs:'column',md:"row"}}
        gridTemplateColumns={{xs:'1fr',md:"1fr 1fr 1fr"}}
      >
        {Resturants.map((item, index)=><EventCard key={index} event={item.resturant} img={item.img} link={item.link}/>)}
          
      </Grid>
      <ExtractBtn link="/CitiesPage" text="More Resturants" />
    </Section>
  );
}
