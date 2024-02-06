import React from "react";
import CategoriesSection from "../../components/Categories/Categories";
import { Stack } from '@mui/material';


export default function CategoriesPage() {
 

  return (
    <div id="categories">
      <Stack width={'100%'} alignItems={"center"} justifyContent={'center'} gap={2}>
          <CategoriesSection/>
      </Stack>
    </div>
  );
}
