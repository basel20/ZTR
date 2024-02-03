import React from "react";

import Section from "../../components/section/Section";
import ExtractBtn from "../../components/ExtractBtn";
import { Grid} from "@mui/material";
import img1 from "./imgs/event1.jpeg";
import img2 from "./imgs/event2.jpeg";
import img3 from "./imgs/event3.jpeg";
import img4 from "./imgs/event4.jpeg";

import EventCard from '../../components/card/EventCard';



export default function Resturants() {
 

  const Resturants = [
    { resturant: "resturant1", img: img1, link: "" },
    { resturant: "resturant2", img: img2, link: "" },
    { resturant: "resturant3", img: img3, link: "" },
    { resturant: "resturant4", img: img4, link: "" },
    { resturant: "resturant1", img: img1, link: "" },
    { resturant: "resturant2", img: img2, link: "" },
    { resturant: "resturant3", img: img3, link: "" },
    { resturant: "resturant4", img: img4, link: "" },
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
