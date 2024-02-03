import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import theme from "../../theme/theme";

// const SectionHeader = styled(Typography)(({theme})=>({
//     fontSize:'48px',

// }))

const SectionHeader = ({ header}) => {
  return (
    <Stack alignItems="center"  gap={5}>
      <Box  sx={{display:'flex', flexDirection:'row', gap:'10px', alignItems:'center'}}>
      <Box sx={{height:{xs:'7px',md:'10px'}, width:{xs:'35px',md:'50px'},   backgroundColor:theme.palette.primary.main }}  >   
      </Box>
        <Typography variant="h1" sx={{ fontSize: {xs:'34px',md:"48px"} ,fontWeight:600, color:theme.palette.secondary.main}}>
          {header}
        </Typography>
        <Box sx={{height:{xs:'7px',md:'10px'}, width:{xs:'35px',md:'50px'}, backgroundColor:theme.palette.primary.main }}  >
        </Box>
      </Box>
    </Stack>
  );
};

export default SectionHeader;
