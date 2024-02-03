import { Button, Stack } from "@mui/material";
import theme from "../theme/theme";
import React from "react";
import { useNavigate } from "react-router-dom";



export default function ExtractBtn({text, link}){
    const navigate = useNavigate()
    return(
        <Stack height={'150px'} justifyContent='center' alignItems='center' >
            <Button onClick={()=>navigate(link)}  sx={{height:'70px', backgroundColor:theme.palette.primary.main, color:'#005A5A',p:'0 30px', fontSize:'24px',borderBottom:'5px solid #005A5A','&:hover':{
            backgroundColor:theme.palette.primary.dark}}}>
                {text}
            </Button>
        </Stack>
        
    )
}